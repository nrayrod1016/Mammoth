import React from 'react';


const RecentCartCard = ({item}) => {
  return ( 
    <div class="container mx-auto">
    <div class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
     <h1 class="h-20 bg-indigo-500 flex items-center justify-between"><img src={item?.pictures[0]} alt={`${item.name}'s pic`} /></h1> 

        </div>  
          <div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
            <p>{item.name}</p>
          </div>
    </div>

    
   );
}
 
export default RecentCartCard;