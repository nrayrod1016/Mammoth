import React from 'react';

const ReviewCard = ({ review, userProfile }) => {
  return (
    <>
      <div>
        <div>
          {review.images?.map((image, idx) => {
            return(
              <img src={image} alt={`${review.author?.name}'s review pics`} key={idx} />
            )
          })}
          {review.videos?.map((video, idx) => {
            return(
              <iframe src={video} title={idx} key={idx}></iframe>
            )
          })}
        </div>
       
    <div class="container mx-auto">
      <div class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
        <div class="h-20 bg-indigo-500 flex items-center justify-between" 
        key={review._id}>
          <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">{review.rating}</h1>
          <p class="mr-20 text-white text-lg"></p>
          <p class="mr-4 text-white font-thin text-lg">{review.author.name}</p>
        </div>

        <p class="py-6 text-lg tracking-wide ml-16">{review.content}</p>
        
        <div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
          
          <p>3/08/2021</p>
        </div>
      </div>
    </div>
  
      </div>
    </>
  );
}
 
export default ReviewCard;