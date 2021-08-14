import React from 'react';

const ReviewCard = ({ review }) => {
  return (
    <>
      <div>
        <div>
          {review.images?.map((image, idx) => {
            <img src={image} alt={`${review.author?.name}'s review pics`} key={idx} />
          })}
          {review.videos?.map((video, idx) => {
            <iframe src={video} title={idx} key={idx}></iframe>
          })}
        </div>
        <div>
          <h3>{review.content}</h3>
        </div>
        <div>
          <h6>{review.rating}</h6>
        </div>
        <div>
          <h6>{review.author.name}</h6>
        </div>
      </div>
    </>
  );
}
 
export default ReviewCard;