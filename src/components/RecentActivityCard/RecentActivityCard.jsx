import React from 'react';


const RecentActivityCard = ({order}) => {
  return ( 

<div class="container mx-auto">
		<div class="bg-white w-60 h-40 mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
		<h1 class="h-20 text-black text-sm text-center bg-indigo-500 flex items-center justify-between">Order Number: ${order._id}</h1>
		<p class="mr-4 text-black text-center font-thin text-lg">{order.items.map(item => { return item})}</p>
      <div class="flex justify-between px-5 mb-2 text-sm  text-gray-600">
        <p class="text-center ">Total Cost: ${order.price}</p>
      </div>
    </div>  
</div>


   );
}
 
export default RecentActivityCard;