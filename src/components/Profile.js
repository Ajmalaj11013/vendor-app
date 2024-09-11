// src/components/Profile.js
import React from 'react';
import ImageUpload from './ImageUpload';
import EditableFields from './EditableFields';
const Profile = () => {
  return (
    <div>
      <ImageUpload/>
      <EditableFields/>
    </div>
  );
};

export default Profile;
