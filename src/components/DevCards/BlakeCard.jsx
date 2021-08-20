import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";


const BlakeCard = () => {
  return ( 
    <div class="flex flex-col  md:flex-row justify-center  flex-wrap gap-3 ">
    <div class="pro-card">
      <div class="bg-white max-w-xs shadow-lg mx-auto  border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer " >
    <div class="bg-indigo-500  flex h-200 items-center">
    
      <img href='https://files.slack.com/files-pri/T0351JZQ0-F02BA5TBPQX/image_from_ios.jpg'  alt='' />
        <p class="ml-4 text-white uppercase">Will code for food</p>
    </div>
  
      <h1 class="py-6 px-6 text-xl tracking-wide text-center">Blake Romano</h1>
  
  
      <p class="py-6 px-6 text-lg tracking-wide text-center"> Blake is a Full-Stack Engineer from the Boston, MA area, with a passion for animals, biology and technology.  </p>
   
      <p class="py-6 px-6 text-lg tracking-wide text-center"> Role: Full-Stack Engineer      </p>
  
  
  
  <button class="px-2 py-1 m-1 mt-5 ml-20 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-700 rounded" > <AiOutlineGithub class="h-10 w-10" /> </button>
  <button class="px-2 py-1 m-1 mt-5 ml-20 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-700 rounded" > <a href="https://www.linkedin.com/in/blakeromano/"><AiOutlineLinkedin class="h-10 w-10" /> </a> </button>
    
                </div>
    
            </div>
            </div>
          

   );
}
 
export default BlakeCard;