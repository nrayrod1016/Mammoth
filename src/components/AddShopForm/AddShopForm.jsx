import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom'
import * as shopService from '../../services/shopService'

const AddShopForm = (shop) => {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phoneNum: "",
  address:"",
  city:"",
  state: "'",
  country:"",
  zipcode:"",
  minorityOwned: [],
})
const [validForm, setValidForm] = useState(false)

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
            value={shop.name}
            name="name"
            onChange={handleChange}
            required
          /><br/> 
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={shop.email}
            name="email"
            onChange={handleChange}
            required
          /><br/> 
          <label htmlFor="phoneNum">Phone Number:</label>
          <input
            type="number"
            autoComplete="off"
            id="phoneNum"
            value={shop.phoneNum}
            name="phoneNum"
            onChange={handleChange}
          /><br/> 
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            autoComplete="off"
            id="address"
            value={shop.address}
            name="address"
            onChange={handleChange}
          /><br/> 
          <label htmlFor="city">City:</label>
          <input
            type="text"
            autoComplete="off"
            id="city"
            value={shop.city}
            name="city"
            onChange={handleChange}
          /><br/> 
          <label htmlFor="state">State:</label>
          <input
            type="text"
            autoComplete="off"
            id="state"
            value={shop.state}
            name="state"
            onChange={handleChange}
          /><br/> 
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            autoComplete="off"
            id="country"
            value={shop.country}
            name="country"
            onChange={handleChange}
          /><br/> 
          <label htmlFor="zipcode">Zipcode:</label>
          <input
            type="text"
            autoComplete="off"
            id="zipcode"
            value={shop.state}
            name="zipcode"
            onChange={handleChange}
          /><br/>
          <button>Add Shop</button><br/> 
          &nbsp;&nbsp;
          <Link to="/shop/new">Cancel</Link>
        </form>
        <label htmlFor="blackOwned">Are you a Black-owned Business:</label>
        <input
        type="checkbox"
        name="blackOwned"
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
        />
        <label htmlFor="womanOwned">Are you a Woman-owned Business:</label>
        <input
        type="checkbox"
        name="womanOwned"
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
        />
        <label htmlFor="lgbtOwned">Are you a LGBTQ+ owned Business:</label>
        <input
        type="checkbox"
        name="lgbtOwned"
        onClick={(evt) => {
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
        />
    </> 


   );
}
 
export default AddShopForm;
