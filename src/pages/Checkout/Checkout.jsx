import React, { useState, useEffect } from 'react';

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
    <>
    <h1>Checkout Here:</h1>
    <form onSubmit={() => props.handleCheckout(formData)}>
    <label htmlFor="zipcode">Address:</label>
    <input
    type="text"
    autoComplete="off"
    id="address"
    value={formData.address}
    name="address"
    onChange={handleChange}
    /><br/>
    <label htmlFor="zipcode">City:</label>
    <input
    type="text"
    autoComplete="off"
    id="City"
    value={formData.city}
    name="city"
    onChange={handleChange}
    /><br/>
    <label htmlFor="zipcode">State:</label>
    <input
    type="text"
    autoComplete="off"
    id="state"
    value={formData.state}
    name="state"
    onChange={handleChange}
    /><br/>
    <label htmlFor="zipcode">Zipcode:</label>
    <input
    type="number"
    autoComplete="off"
    id="zipcode"
    value={formData.zipcode}
    name="zipcode"
    onChange={handleChange}
    /><br/>
    <label htmlFor="zipcode">Country:</label>
    <input
    type="text"
    autoComplete="off"
    id="country"
    value={formData.country}
    name="country"
    onChange={handleChange}
    /><br/>
    <label htmlFor="zipcode">Card Number:</label>
    <input
    type="number"
    autoComplete="off"
    id="cardNumber"
    name="cardNumber"
    /><br/>
    <label htmlFor="CVV">CVV:</label>
    <input
    type="number"
    autoComplete="off"
    id="CVV"
    name="CCV"
    maxLength='3'
    /><br/>
    <label htmlFor="exp">Card Expiration:</label>
    <input
    type="text"
    autoComplete="off"
    id="exp"
    name="exp"
    /><br/>
    <button type="submit">Place Your Order!</button>
    </form>
    </>
    }
    {!props.userProfile?.cart?.length &&
    <h1>Add Items to Your Cart!</h1>
    }
    </>
  );
}
 
export default Checkout;