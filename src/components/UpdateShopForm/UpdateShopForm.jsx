import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom'
import * as shopService from '../../services/shopService'

const UpdateShopForm = (props) => {
const [formData, setFormData] = useState(props.shop)
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
     <form autoComplete="off" onSubmit={handleSubmit} >
          <label htmlFor="name">Name of Shop:</label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={formData.name}
            name="name"
            onChange={handleChange}
            required
          /><br/> 
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            required
          /><br/> 
          <label htmlFor="phoneNum">Phone Number:</label>
          <input
            type="number"
            autoComplete="off"
            id="phoneNum"
            value={formData.phoneNum}
            name="phoneNum"
            onChange={handleChange}
          /><br/> 
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            autoComplete="off"
            id="address"
            value={formData.address}
            name="address"
            onChange={handleChange}
          /><br/> 
          <label htmlFor="city">City:</label>
          <input
            type="text"
            autoComplete="off"
            id="city"
            value={formData.city}
            name="city"
            onChange={handleChange}
          /><br/> 
          <label htmlFor="state">State:</label>
          <input
            type="text"
            autoComplete="off"
            id="state"
            value={formData.state}
            name="state"
            onChange={handleChange}
          /><br/> 
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            autoComplete="off"
            id="country"
            value={formData.country}
            name="country"
            onChange={handleChange}
          /><br/> 
          <label htmlFor="zipcode">Zipcode:</label>
          <input
            type="text"
            autoComplete="off"
            id="zipcode"
            value={formData.state}
            name="zipcode"
            onChange={handleChange}
          /><br/>
          <button>Add Shop</button><br/> 
          &nbsp;&nbsp;
          <Link to="/shop/new">Cancel</Link>
        </form>
    </> 


   );
}
 
export default UpdateShopForm;
