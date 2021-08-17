import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'; 


const ProfileForm = (props) => {
  const [profile, setProfile] = useState({}) 
  const [validForm, setValidForm] = useState(true)
  const history = useHistory()

  
  const handleChange = evt => { 
    setProfile({...profile, [evt.target.name]: 
      evt.target.value })
  }

  const formElement = useRef() 
  useEffect(() => { 
    formElement.current.checkValidity() ? 
    setValidForm(true) : setValidForm(false)
  })
  useEffect(() => {
    setProfile(props.userProfile)
  }, [props.userProfile])

  const handleSubmit = evt => { 
    evt.preventDefault()
    props.handleUpdateProfile(profile)
    history.push('/')
  }

 
  return (
    <>
    <form autoComplete="off" onSubmit={handleSubmit} ref={formElement}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={profile?.name}
            name="name"
            onChange={handleChange}
            required
          /><br/> 
          <label htmlFor="email">Email</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={profile?.email}
            name="email"
            onChange={handleChange}
            required
          /><br/> 
          <label htmlFor="address">Address</label>
          <input
            type="text"
            autoComplete="off"
            id="address"
            value={profile?.address}
            name="address"
            onChange={handleChange}
          /><br/> 
          <label htmlFor="city">City</label>
          <input
            type="text"
            autoComplete="off"
            id="city"
            value={profile?.city}
            name=""
            onChange={handleChange}
          /><br/> 
          <label htmlFor="state">State</label>
          <input
            type="text"
            autoComplete="off"
            id="state"
            value={profile?.state}
            name="state"
            onChange={handleChange}
          /><br/> 
          <label htmlFor="country">Country</label>
          <input
            type="text"
            autoComplete="off"
            id="country"
            value={profile?.country}
            name="country"
            onChange={handleChange}
          /><br/> 
          <label htmlFor="zipcode">Zipcode</label>
          <input
            type="text"
            autoComplete="off"
            id="zipcode"
            value={profile?.zipcode}
            name="zipcode"
            onChange={handleChange}
          /><br/>
          <label htmlFor="avatar">Avatar Link:</label>
          <input
            type="text"
            autoComplete="off"
            id="avatar"
            value={profile?.avatar}
            name="avatar"
            required
            onChange={handleChange}
          /><br/>
          <button disabled={!validForm}>Update Profile</button><br/> 
          &nbsp;&nbsp;
          <Link to="/">Cancel</Link>
        </form>


    </>
  );
}


export default ProfileForm 