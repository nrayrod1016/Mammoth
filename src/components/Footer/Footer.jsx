import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.module.css'

const Footer = () => {
  return (
    <>

  <footer class=" bottom-0" >
          <div class="bg-black bg-opacity-75  text-white py-15 w-auto m-1 md:w-auto bottom-0 ">
            <div class="container mx-auto px-6 lg:px-20 py-6">
                <div class="flex justify-center text-gray-300 mb-1">
                    © 2021  <span class="font-bold">Mammoth.</span> 2021 All right reserved.
                </div>
                <div class="flex font-light justify-center text-gray-500 text-sm">
                    <p>Designed by <span class="font-bold">Maste</span></p>
                </div>
            </div>
          </div>
  </footer>

    </>
  );
}
 

export default Footer;