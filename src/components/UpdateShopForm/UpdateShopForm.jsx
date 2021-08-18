import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import * as shopService from '../../services/shopService'

const UpdateShopForm = (props) => {


const location = useLocation()
console.log(location)
const [formData, setFormData] = useState(location.state.shop)
const [validForm, setValidForm] = useState(true)

const history = useHistory()

//  Handle submit 
const handleSubmit = evt => { 
  evt.preventDefault()
  shopService.create(formData)
  .then(shop => {
    history.push('/')
  })
}

const handleChange = evt => {
  setFormData({...formData, [evt.target.name]: evt.target.value})
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
        <p class="text-indigo-500 font-medium text-center text-xl font-bold">Add Shop</p>
        <div >
            <label class="block text-lg text-black" htmlFor="name" 
            >
            Name of Shop 
            </label>
            <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"  
            type="text"
            autoComplete="off"
            id="name"
            value={formData.name}
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
             value={formData.email}
             name="email"
             onChange={handleChange}
             required
            ></input>
          </div>

          <div class="mt-2" >
            <label class="block  text-md text-black" htmlFor="phoneNum" >Phone Number </label>
             <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="number"
              autoComplete="off"
              id="phoneNum"
              value={formData.phoneNum}
              name="phoneNum"
              onChange={handleChange}
              >

              </input>
          </div>
          <div class="mt-2" >
            <label class="block  text-sm text-black" htmlFor="address" className="">Address</label>
             <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="text"
                autoComplete="off"
                id="address"
                value={formData.address}
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
             value={formData.city}
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
               value={formData.state}
               name="state"
               onChange={handleChange}
              >

              </input>
          </div>
          <div class="mt-2" >
            <label class="block  text-sm text-black" htmlFor="country" className="">Country</label>
             <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="text"
              autoComplete="off"
              id="country"
              value={formData.country}
              name="country"
              onChange={handleChange}
              >

              </input>
          </div>
          <div class="mt-2" >
            <label class="block  text-sm text-black" htmlFor="zipcode" className="">Zipcode</label>
             <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
               type="text"
               autoComplete="off"
               id="zipcode"
               value={formData.zipcode}
               name="zipcode"
               onChange={handleChange}
              >

              </input>
          </div>
          <div class="mt-2" >
            <label class="block  text-sm text-black" htmlFor="zipcode" className="">Are you Woman-owned Business?</label>
             <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="checkbox"
              name="womanOwned"
              value={formData.minorityOwned?.some(m =>  m === 'womanOwned')}
              onChange={(evt) => {
                let updateFormData = {...formData}
                if (updateFormData.minorityOwned.some(m =>  m === evt.target.name)) {
                let updateMinorityOwned = updateFormData.minorityOwned.filter(m => m !== evt.target.name)
                updateFormData.minorityOwned = updateMinorityOwned
                setFormData({...updateFormData})
                } else {
                updateFormData.minorityOwned.push(evt.target.name)
                setFormData({...updateFormData})
                }
              }}
              >

              </input>
          </div>
          <div class="mt-2" >
            <label class="block  text-sm text-black" htmlFor="zipcode" className="">Are you a Black-owned Business?</label>
             <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="checkbox"
              name="blackOwned"
              value={formData.minorityOwned?.some(m =>  m === 'blackOwned')}
              onChange={(evt) => {
                let updateFormData = {...formData}
                if (updateFormData.minorityOwned?.some(m =>  m === evt.target.name)) {
                let updateMinorityOwned = updateFormData.minorityOwned.filter(m => m !== evt.target.name)
                updateFormData.minorityOwned = updateMinorityOwned
                setFormData({...updateFormData})
                } else {
                updateFormData.minorityOwned.push(evt.target.name)
                setFormData({...updateFormData})
                }
              }}
              >

              </input>
          </div>

          <div class="mt-2" >
            <label class="block  text-sm text-black" htmlFor="lgbtOwned" className="">Are you a LGBTQ+ owned Business?</label>
             <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
               type="checkbox"
               name="lgbtOwned"
               value={formData.minorityOwned?.some(m =>  m === 'lgbtOwned')}
               onClick={(evt) => {
                 let updateFormData = {...formData}
                 if (updateFormData.minorityOwned?.some(m =>  m === evt.target.name)) {
                 let updateMinorityOwned = updateFormData.minorityOwned.filter(m => m !== evt.target.name)
                 updateFormData.minorityOwned = updateMinorityOwned
                 setFormData({...updateFormData})
                 } else {
                 updateFormData.minorityOwned.push(evt.target.name)
                 setFormData({...updateFormData})
                 }
               }}
              >

              </input>
          </div>

          <div class="mt-4 items-center flex justify-between">
            <button class="px-4 py-1 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-200 rounded"
             >
               Add Shop
               </button>
            <Link to="/shop/new">
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
 
export default UpdateShopForm;
