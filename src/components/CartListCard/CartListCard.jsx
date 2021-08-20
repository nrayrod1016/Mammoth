import React from 'react';


const CartListCard = ({item}) => {
  return ( 
    <div class="container w-80  mx-auto">
    <div class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">

     <div class="h-20 bg-indigo-500 text-center flex-wrap flex items-center justify-between">
       <img src={item?.pictures[0]} alt={`${item.name}'s pic`} />
          <p class="mr-20 text-white text-lg"></p>
          <p class="mr-4 text-white font-thin text-lg"></p>
     </div> 
        <div class="flex justify-between p-10 mb-2  text-sm text-gray-600">
        </div>  
            <p class=" text-lg m-4">{item.name}</p>
          </div>
    </div>

    
   );
}
 
export default CartListCard;