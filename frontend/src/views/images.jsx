import { useEffect, useState } from 'react';
import useAxios from '../utils/useAxios';
import { AiOutlineDelete, AiOutlineArrowLeft, AiOutlineUpload } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Images = () => {
    const [posRes, setPostRes] = useState('');
    const [images, setImages] = useState([]);
    const [file, setFile] = useState(null);
    const api = useAxios();
    const baseURL = 'http://localhost:8000';
    const [deleteButtonBackgrounds, setDeleteButtonBackgrounds] = useState({});
    const navigate = useNavigate();
    const [chosenPhoto, setChosenPhoto] = useState(null);

    const fetchImages = async () => {
        try {
            const response = await api.get('/images/');
            console.log(response.data);
            const initialBackgrounds = response.data.reduce((acc, image) => {
                acc[image.id] = 'rgba(255, 0, 0, 0.7)';
                return acc;
            }, {});
            setImages(response.data || []);
            setDeleteButtonBackgrounds(initialBackgrounds);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleUpload = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
    
            try {
                const response = await api.post('/images/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    
                if (response.status === 201 || response.status === 204) {
                    fetchImages();
                    document.getElementById('fileInput').value = '';
                    setFile(null);
                    setPostRes('');
                    setChosenPhoto(null); // Reset chosen photo after upload
                } else {
                    console.error('Upload failed:', response);
                    setPostRes('Failed to upload image');
                }
            } catch (error) {
                console.error('Error uploading image:', error);
                setPostRes('Error uploading image');
            }
        } else {
            console.error('No file is chosen');
            setPostRes('No file is chosen');
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setChosenPhoto(URL.createObjectURL(selectedFile));
    };

    const handleDelete = async (id) => {
        try {
            const response = await api.delete(`/images/${id}`);
            if (response.status === 204) {
                const updatedImages = images.filter((image) => image.id !== id);
                setImages(updatedImages);
            } else {
                console.error('Delete failed:', response);
                setPostRes('Failed to delete image');
            }
        } catch (error) {
            console.error('Error deleting image:', error);
            setPostRes('Error deleting image');
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
            <h1>Images</h1>
            
            <label htmlFor="fileInput" className="custom-file-upload">
                <AiOutlineUpload />
                Choose Image
            </label>
            <input
                id="fileInput"
                type="file"
                onChange={handleFileChange}
                className="browse-button"
                style={{ display: 'none' }}
            />
            {chosenPhoto && (
                <div>
                    <h2>Chosen Photo:</h2>
                    <img src={chosenPhoto} alt="Chosen" style={{ width: '200px', height: '200px' }} />
                    <div>
                        <button type="submit" onClick={handleUpload} className='upload-button'>
                            Upload
                        </button>
                    </div>
                    
                </div>
            )}

            <div 
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '20px',
                    justifyContent: 'flex-start',
                    width: '100%',
                    paddingLeft: '20px',
                }}
            >
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <div
                            key={index}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                                marginBottom: '20px',
                            }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                }}
                            >
                                <img
                                    src={`${baseURL}${image.image}`}
                                    alt={`Image ${index}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        background: deleteButtonBackgrounds[image.id],
                                        padding: '5px',
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s',
                                    }}
                                    onMouseEnter={() => {
                                        setDeleteButtonBackgrounds((prevState) => ({
                                            ...prevState,
                                            [image.id]: 'rgba(255, 0, 0, 1)',
                                        }));
                                    }}
                                    onMouseLeave={() => {
                                        setDeleteButtonBackgrounds((prevState) => ({
                                            ...prevState,
                                            [image.id]: 'rgba(255, 0, 0, 0.7)',
                                        }));
                                    }}
                                    onClick={() => handleDelete(image.id)}
                                >
                                    <AiOutlineDelete size={20} color="white" />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>There are no images</p>             
                )}
                {[...Array(3 - (images.length % 3 || 3))].map((_, index) => (
                    <div key={`placeholder-${index}`} style={{ visibility: 'hidden' }} />
                ))}
            </div>

            {posRes && <p>{posRes}</p>}
        </section>
    );
};

export default Images;
