import React from 'react';
import { AiOutlineGithub } from "react-icons/ai";

const NickCard = () => {
  return ( 
<div class="flex flex-col  md:flex-row justify-center  flex-wrap gap-3 ">
  <div class="pro-card">
    <div class="bg-white max-w-xs shadow-lg mx-auto  border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
  <div class="bg-indigo-500  flex h-200 items-center">
  
    <img src=''  />
      <p class="ml-4 text-white uppercase">Will code for food</p>
  </div>

    <h1 class="py-6 px-6 text-xl tracking-wide text-center">Nick Rodriguez</h1>


    <p class="py-6 px-6 text-lg tracking-wide text-center"> Quick about me section can increase in width if needed</p>
 
    <p class="py-6 px-6 text-lg tracking-wide text-center">Front-End Engineer</p>



<button class="px-2 py-1 m-1 mt-5 ml-20 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-700 rounded" > <AiOutlineGithub class="h-10 w-10" /> </button>
  
              </div>
  
          </div>
          </div>
  
          

   );
}
 
export default NickCard