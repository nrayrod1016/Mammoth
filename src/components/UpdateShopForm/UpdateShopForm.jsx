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
        <label htmlFor="blackOwned">Are you a Black-owned Business:</label> 
        <input
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
        />
        <label htmlFor="womanOwned">Are you a Woman-owned Business:</label>
        <input
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
        />
        <label htmlFor="lgbtOwned">Are you a LGBTQ+ owned Business:</label>
        <input
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
        />
          <button>Add Shop</button><br/> 
          &nbsp;&nbsp;
          <Link to="/shop/new">Cancel</Link>
        </form>
    </> 


   );
}
 
export default UpdateShopForm;
