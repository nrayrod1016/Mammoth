import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.module.css'

const Footer = () => {
  return (
    <>
<h1 class="m-40"> </h1>

  <footer class="mt-auto bottom-0" >
          <div class="bg-white text-indigo-600 py-15 w-auto md:w-auto bottom-0 border-0">
            <div class="container mx-auto px-6 lg:px-20 py-6">
                <div class="flex justify-center text-indigo-700 mb-1">
                    © 2021  <span class="font-bold">Mammoth.</span> 2021 All right reserved.
                </div>
                <div class="flex font-light justify-center text-indigo-600 text-sm">
                    <p>Designed by <span class="font-bold">Maste</span></p>
                </div>
            </div>
          </div>
  </footer>

    </>
  );
}
 

export default Footer;