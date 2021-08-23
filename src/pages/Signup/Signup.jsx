import React, { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './Signup.css';

const Signup = (props) => {

  return (
    <main>
      
      <SignupForm handleSignupOrLogin={props.handleSignupOrLogin} />
    </main>
  );
}
 
export default Signup;
