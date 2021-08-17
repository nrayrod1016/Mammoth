import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'; 


const ProfileForm = (props) => {
  const [profile, setProfile] = useState(props.userProfile) 
  const [validForm, setValidForm] = useState(true)
  const history = useHistory()

  
  const handleChange = evt => { 
    setProfile({...profile, [evt.target.name]: 
      evt.target.value })
  }

 

  const handleSubmit = evt => { 
    evt.preventDefault()
    props.handleUpdateProfile(profile)
    history.push('/')
  }

 
  return (
    <>
   <main>
<div class="h-screen font-sans login bg-cover">
<div class="container mx-auto h-full flex flex-1 justify-center items-center">
<div class="w-full max-w-lg">
<div class="leading-loose">
<form class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
 autoComplete="off"
 onSubmit={handleSubmit}
 >
    <p class="text-indigo-500 font-medium text-center text-xl font-bold">Sign Up</p>
    <div >
        <label class="block text-lg text-black" htmlFor="name" 
        >
        Name
        </label>
        <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
           type="text"
           autoComplete="off"
           id="name"
           value={profile?.name}
           name="name"
           onChange={handleChange}
           required
        ></input>
      </div>
      <div>
        <label class="block text-md text-black" htmlFor="email" 
        >
        E-mail
        </label>
        <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"  
          type="text"
          autoComplete="off"
          id="email"
          value={profile?.email}
          name="email"
          onChange={handleChange}
          required
        ></input>
      </div>

      <div class="mt-2" >
        <label class="block  text-md text-black" htmlFor="address" >
          Address
          </label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            autoComplete="off"
            id="address"
            value={profile?.address}
            name="address"
            onChange={handleChange}
          >

          </input>
      </div>
      <div class="mt-2" >
        <label class="block  text-sm text-black" htmlFor="city" className="">City</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
         type="text"
         autoComplete="off"
         id="city"
         value={profile?.city}
         name="city"
         onChange={handleChange}
          >

          </input>
      </div>

      <div class="mt-2" >
        <label class="block  text-sm text-black" htmlFor="state" className="">State</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
          type="text"
          autoComplete="off"
          id="state"
          value={profile?.state}
          name="state"
          onChange={handleChange}
          >

          </input>
      </div>
      <div class="mt-2" >
        <label class="block  text-sm text-black" htmlFor="state" className="">Country</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
           type="text"
           autoComplete="off"
           id="country"
           value={profile?.country}
           name="country"
           onChange={handleChange}
          >

          </input>
      </div>
      <div class="mt-2" >
        <label class="block  text-sm text-black" htmlFor="state" className="">Zipcode</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="text"
              autoComplete="off"
              id="zipcode"
              value={profile?.zipcode}
              name="zipcode"
              onChange={handleChange}
          >

          </input>
      </div>
      <div class="mt-2" >
        <label class="block  text-sm text-black" htmlFor="state" className="">Avatar Link</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="text"
              autoComplete="off"
              id="avatar"
              value={profile?.avatar}
              name="avatar"
              required
              onChange={handleChange}
          >
          </input>
      </div>


      <div class="mt-4 items-center flex justify-between">
        <button class="px-4 py-1 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-200 rounded"
        disabled={!validForm}
         >
           Update Profile 
           </button>
        <Link to="/">
          <button class="px-4 py-1 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-200 rounded">Cancel</button>
        </Link>
       
      </div>
      

</form>

</div>
</div>
</div>
</div>
</main>


    </>
  );
}


export default ProfileForm 