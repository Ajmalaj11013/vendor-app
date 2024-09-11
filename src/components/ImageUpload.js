import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ImageUpload.css';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch the image URL from the server when the component mounts
    axios.get('/api/getImageUrl')
      .then(response => {
        if (response.data.imageUrl) {
          setImageUrl(response.data.imageUrl);
        }
      })
      .catch(error => {
        console.error('Error fetching the image URL:', error);
      });
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      // Upload the image to the server
      axios.post('/api/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        setImageUrl(response.data.imageUrl);
      })
      .catch(error => {
        console.error('Error uploading the image:', error);
      });
    }
  };

  return (
    <div className="image-upload">
      <div className="image-preview">
        {imageUrl ? (
          <img src={imageUrl} alt="Uploaded" />
        ) : (
          <span>No Image</span>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="imageInput"
      />
      <label className="upload-button" htmlFor="imageInput">
        Upload Image
      </label>
    </div>
  );
};

export default ImageUpload;