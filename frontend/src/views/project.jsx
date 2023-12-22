import { useState } from 'react';
import ThreeScene from './threescene';
import useAxios from '../utils/useAxios';
import * as Three from 'three'; // Import Three.js
import { AiOutlineArrowLeft, AiOutlineUpload } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Project = () => {
    const [res, setRes] = useState('');
    const [posRes, setPostRes] = useState('');
    const [projectName, setProjectName] = useState('');
    const api = useAxios();
    const [texture, setTexture] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false); // Track if the image has loaded
    const navigate = useNavigate();

    const handleImageUpload = (e) => {
        e.preventDefault();
        const file = e.target.files[0];

        if (file) {
            setSelectedFile(file);

            const reader = new FileReader();
            reader.onload = function (event) {
                const newTexture = new Three.TextureLoader().load(event.target.result, () => {
                    console.log('Image loaded successfully.');
                    setImageLoaded(true); // Set the state once the image is loaded
                }, undefined, (err) => {
                    console.error('Error loading image:', err);
                });

                setTexture(newTexture);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!imageLoaded) {
            console.log('Please wait for the image to load.');
            return; // Prevent form submission if the image isn't fully loaded
        }

        // Add your logic for form submission
        try {
            const formData = new FormData();
            formData.append('name', projectName);
            formData.append('image', selectedFile);

            const response = await api.post('/projects/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const imageData = response?.data?.image;
            if (imageData) {
                setRes('Upload successful');
            }
        } catch (error) {
            console.error('Error:', error);
            setPostRes('Failed to fetch image data');
        }
    };

    const navigateBack = () => {
        navigate(-1);
    };

    return (
        <section>
            <button onClick={navigateBack} className='navigate-btn'>
                    <AiOutlineArrowLeft />
            </button>
            <h1>3D Project</h1>
            <p>{res}</p>
            <label htmlFor="fileInput" className="custom-file-upload">
                <AiOutlineUpload />
                    Choose Image
                </label>
                <input
                id="fileInput"
                type="file"
                onChange={handleImageUpload}
                className="browse-button"
                style={{ display: 'none' }}
            />
            <ThreeScene texture={texture} />
            <form method="POST" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Project Name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    required
                    style={{
                        margin: '8px',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease-in-out',
                        width: '100%',
                        maxWidth: '300px', // Adjust as needed
                    }}
                />
                <div className='upload-button'>
                    <button type="submit" disabled={!imageLoaded}>Create Project</button>
                </div>
                
            </form>
            {posRes && <p>{posRes}</p>}
        </section>
    );
};

export default Project;
