import React, { useState, useRef, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as reviewService from '../../services/reviewService'

import ImageInput from "./ImageInput/ImageInput"
import VideoInput from './VideoInput/VideoInput';

const ReviewForm = (props) => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    content: "",
    rating: 3,
    images: [],
    videos: [],
    wouldRec: false,
  })
  
  const handleChangeImage = (idx, value) => {
    formData.images.splice(idx, 1, value)
    setFormData({...formData})
  }

  const handleChangeVideo = (idx, value) => {
    formData.videos.splice(idx, 1, value)
    setFormData({...formData})
  }

  useEffect(() => {
    if(!props.review === undefined) {
      setFormData(props.review)
    } 
  }, [])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    if (!props.review === undefined) {
      setFormData({...formData, rating: parseInt(formData.rating)})
      reviewService.updateReview(props.review._id, formData)
      history.push(history.pathname)
    } else {
      if(props.type === "Shop") {
        setFormData({...formData, rating: parseInt(formData.rating)})
        reviewService.createReview("Shop", props.shop._id, formData)
        props.reviewSubmit()
      } else if (props.type === "Product") {
        setFormData({...formData, rating: parseInt(formData.rating)})
        reviewService.createReview("Product", props.product._id, formData)
        props.reviewSubmit()
      }
    }
  }

  const deleteImageInput = (idx) => {
    formData.images.splice(idx, 1)
    setFormData({...formData})
  }

  const deleteVideoInput = (idx) => {
    formData.videos.splice(idx, 1)
    setFormData({...formData})
  }
  
  return (
    <>
    <form class="max-w-md m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
   autoComplete="off"
   onSubmit={handleSubmit}
   >
      <p class="text-indigo-500 font-medium text-center text-lg font-bold">Add a Review</p>
      <div>
          <label class="block text-sm text-black" htmlFor="name"
          >
         Content
          </label>
          <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"     
          type="text"
          value={formData.content}
          name="content"
          onChange={handleChange}
          />
        </div>

        {formData.images?.map((image, idx) => 
          <ImageInput handleChangeImage={handleChangeImage} key={idx} idx={idx} image={image} deleteImageInput={deleteImageInput} />
        )}
        {formData.videos?.map((video, idx) => 
          <VideoInput handleChangeVideo={handleChangeVideo} key={idx} idx={idx} video={video} deleteVideoInput={deleteVideoInput} />
        )}

        <div>
          <label class="block text-sm text-black" 
          >
          Rating
          </label>
          <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
          required
          type="range"
          name="rating"
          value={formData.rating}
          min="1"
          max="5"
          step="1"
          onChange={handleChange}
          ></input>
        </div>

        <div class="mt-2" >
          <label class="block  text-sm text-black" htmlFor="password">Would you Recommend?</label>
           <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="checkbox"
            name="wouldRec"
            value={formData.wouldRec}
            onChange={(evt) => {setFormData({...formData, [evt.target.name]: !formData.wouldRec})}}
            >

            </input>
        </div>
      

        <div class="mt-4 items-center flex justify-between">
        <div> 
        <button onClick={() => {
          let updateFormData = {...formData}
          updateFormData.videos.push('')
          setFormData(updateFormData)
        }} 
        type="button"class="px-4 py-1 m-1 text-white font-light tracking-wider bg-indigo-500 hover:bg-gray-800 rounded"
        
           >
              Video 
             </button>
             

             <button class="px-4 py-1 m-1 text-white font-light tracking-wider bg-indigo-500 hover:bg-gray-800 rounded" onClick={() => {
          let updateFormData = {...formData}
          updateFormData.images.push('')
          setFormData(updateFormData)
          }} type="button">
            
            Image
          
          </button></div> 

          <br/>
          <div>
          <button type="button" class="px-4 py-1 m-1 text-white font-light tracking-wider bg-indigo-500 hover:bg-gray-800 rounded">
            Submit
             </button>
             
          <Link to="/">
            <button class="px-4 py-1 m-1 text-white font-light tracking-wider bg-red-500 hover:bg-gray-800 rounded">Cancel</button>
          </Link>
  </div> 
        </div>
        <div class="text-center">

        </div>

  </form>
    </>
  );
}
 
export default ReviewForm;