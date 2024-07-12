import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import './AdminPanel.css';

const AdminPanel = ({ addArticle }) => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const storageRef = ref(storage, `cards/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(url => {
            setImageUrl(url);
            addArticle({
              imgUrl: url, // Pass the URL to Cards.jsx
              // Add additional fields as needed
            });
          });
        }
      );
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
      <progress value={progress} max="100" />
      {imageUrl && <img src={imageUrl} alt="Uploaded product" />}
    </div>
  );
};

export default AdminPanel;
