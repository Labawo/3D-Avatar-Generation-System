import { useState, useEffect } from 'react';
import * as Three from 'three';
import useAxios from '../utils/useAxios';
import ThreeScene from './threescene';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showInspect, setShowInspect] = useState(false);
  const [texture, setTexture] = useState(null);
  const baseURL = 'http://localhost:8000';
  const navigate = useNavigate();
  const api = useAxios();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects/');
        if (response && response.data !== undefined && Array.isArray(response.data)) {
          setProjects(response.data);
        } else {
          console.error('Invalid or empty response data:', response.data);
          setProjects([]);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects([]);
      }
    };
  
    fetchProjects();
  }, []);

  useEffect(() => {
    if (!selectedProject || !showInspect) return;

    const imageUrl = baseURL + selectedProject.image;

    const newTexture = new Three.TextureLoader().load(imageUrl, () => {
      console.log('Image loaded successfully.');
    }, undefined, (err) => {
      console.error('Error loading image:', err);
    });

    setTexture(newTexture);
  }, [selectedProject, showInspect]);

  const handleInspect = async (project) => {
    setSelectedProject(project);
    try {
      const imageUrl = baseURL + project.image;

      const newTexture = new Three.TextureLoader().load(imageUrl, () => {
        console.log('Image loaded successfully.');
      }, undefined, (err) => {
        console.error('Error loading image:', err);
      });

      setTexture(newTexture);
      setShowInspect(true);
    } catch (error) {
      console.error('Error loading project image:', error);
    }
  };

  const handleDelete = async (projectId) => {
    try {
      await api.delete(`/projects/${projectId}`);
      const updatedProjects = projects.filter((project) => project.id !== projectId);
      setProjects(updatedProjects);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const renderInspectScene = () => {
    if (!selectedProject || !showInspect) return null;
  
    const handleInnerClick = (e) => {
      e.stopPropagation();
    };
  
    const handleCloseClick = () => {
      setShowInspect(false);
    };
  
    return (
      <div className={`inspect-popup ${showInspect ? '' : 'hide'}`} onClick={handleCloseClick}>
        <div className="inspect-content">
          <div className="inspect-scene" onClick={handleInnerClick}>
            <h2>Inspecting Project: {selectedProject.name}</h2>
            <ThreeScene texture={texture} />
            <button onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      </div>
    );
  };

  const renderProjects = () => {
    if (projects.length === 0) {
      return (
        <tr>
          <td colSpan="2">There are no projects.</td>
        </tr>
      );
    }

    return projects.map((project, index) => (
      <tr key={index}>
        <td>{project.name}</td>
        <td>
          <button className='upload-button' onClick={() => handleInspect(project)}>Inspect</button>
          <button className='red-button' onClick={() => handleDelete(project.id)}>Delete</button>
        </td>
      </tr>
    ));
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <button onClick={navigateBack} className='navigate-btn'>
        <AiOutlineArrowLeft />
      </button>
      <h1>My Projects</h1>
      <table className="project-table">
        <thead>
          <tr>
            <th>Project Name</th>
          </tr>
        </thead>
        <tbody>{renderProjects()}</tbody>
      </table>
      {renderInspectScene()}
    </section>
  );
};

export default Projects;
