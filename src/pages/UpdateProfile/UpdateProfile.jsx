import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import ProfileForm from '../../components/ProfileForm/ProfileForm'

const UpdateProfile = (props) => {
  return (
    <>
    <h1>Update Your Profile</h1>
    <ProfileForm userProfile={props.userProfile} handleUpdateProfile={props.handleUpdateProfile} /> 
    </>
  );
}
 
export default UpdateProfile;