import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import * as profileService from '../../services/profileService'

const Profile = (props) => {
  const [profile, setProfile] = useState({})
  const { id } = useParams()

  useEffect(() => { 
    profileService.getProfile(id)
    .then(profile => {
      setProfile(profile)
    }
      )
  }, [id]) 

  


  return (
    <>
    {props.userProfile?._id === profile._id &&
      <Link to={`/profile/${profile._id}/update`}>Update Profile!</Link>
    }

    {props.userProfile?._id === profile._id &&
       <Link to='/shops/new'>Add a Shop!</Link>
    }
    </>
  );
}
 
export default Profile;