import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.module.css'

const Footer = () => {
  return (
    <>
  <footer>
          <div class="bg-gradient-to-br from-indigo-900 to-green-900  w-max md:w-auto ">
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