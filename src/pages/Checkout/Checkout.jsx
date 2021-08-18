import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const Checkout = (props) => {
  const [formData, setFormData] = useState({
    address: props.userProfile?.address,
    city: props.userProfile?.city,
    zipcode: props.userProfile?.zipcode,
    state: props.userProfile?.state,
    country: props.userProfile?.country,
  })
  
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  return (
    <>
   {props.userProfile?.cart?.length > 0 &&
<main>
<div class="h-screen font-sans login bg-cover">
<div class="container mx-auto h-full flex flex-1 justify-center items-center">
<div class="w-full max-w-lg">
<div class="leading-loose">
<form class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
onSubmit={() => props.handleCheckout(formData)}
 >
    <p class="text-indigo-500 font-medium text-center text-xl font-bold">Checkout Form</p>
    <div >
        <label class="block text-lg text-black" htmlFor="address" 
        >
        Address
        </label>
        <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"  type="text"
      type="text"
      autoComplete="off"
      id="address"
      value={formData.address}
      name="address"
      onChange={handleChange}
        ></input>
      </div>
      <div>
        <label class="block text-md text-black" htmlFor="email" 
        >
        City
        </label>
        <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"  type="text"
    type="text"
    autoComplete="off"
    id="City"
    value={formData.city}
    name="city"
    onChange={handleChange}
        ></input>
      </div>

      <div class="mt-2" >
        <label class="block  text-md text-black" htmlFor="State" >State</label>
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
        <label class="block  text-sm text-black" htmlFor="country" >Country</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
          type="text"
          autoComplete="off"
          id="country"
          value={formData.country}
          name="country"
          onChange={handleChange}>

          </input>
      </div>

      <div class="mt-2" >
        <label class="block  text-sm text-black" htmlFor="password" className="">Card Number</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
           type="number"
           autoComplete="off"
           id="cardNumber"
           name="cardNumber"
          required>

          </input>
      </div>
      <div class="mt-2" >
        <label class="block  text-sm text-black" htmlFor="password" className="">CVV</label>
         <input class="w-full px-5 py-1 tex   t-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"    
          type="number"
          autoComplete="off"
          id="CVV"
          name="CCV"
          maxLength='3'
          required>

          </input>
      </div>
      <div class="mt-2" >
        <label class="block  text-sm text-black" htmlFor="password" className="">Card Expiration Date</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
         type="text"
         autoComplete="off"
         id="exp"
         name="exp"
          required>
          </input>
      </div>

      <div class="mt-2" >
        <label class="block text-sm text-black" htmlFor="zipcode" className="">ZipCode</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
         type="text"
         autoComplete="off"
         id="exp"
         name="exp"
          required>

          </input>
      </div>

      <div class="mt-4 items-center flex justify-between">
        <button class="px-4 py-1 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-200 rounded"
         >
          Place Your Order
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

 }
 {!props.userProfile?.cart?.length &&
  <h1 class=" text-indigo-500 font-medium mt-10 text-center text-xl font-bold" >Please Add Items to Your Cart!</h1>
  }
    </>
  );
}
 
export default Checkout;