import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
    <h1>Add a Review</h1>
      <form onSubmit={handleSubmit}>
        <label>Content:</label>
        <textarea 
        type="text"
        name="content"
        onChange={handleChange}
        > 
        {formData.content}
        </textarea>

        {/*  */}
        {formData.images?.map((image, idx) => 
          <ImageInput handleChangeImage={handleChangeImage} key={idx} idx={idx} image={image} deleteImageInput={deleteImageInput} />
        )}
        {formData.videos?.map((video, idx) => 
          <VideoInput handleChangeVideo={handleChangeVideo} key={idx} idx={idx} video={video} deleteVideoInput={deleteVideoInput} />
        )}
        <label>Rating:</label>
        <input
        required
        type="range"
        name="rating"
        value={formData.rating}
        min="1"
        max="5"
        step="1"
        onChange={handleChange}
        />
        {/*  */}
        <label>Would you Recommend?</label>
        <input
        type="checkbox"
        name="wouldRec"
        value={formData.wouldRec}
        onChange={(evt) => {setFormData({...formData, [evt.target.name]: !formData.wouldRec})}}
        />
        <button onClick={() => {
          let updateFormData = {...formData}
          updateFormData.videos.push('')
          setFormData(updateFormData)
        }} 
        type="button">Add Video</button>
        <button onClick={() => {
          let updateFormData = {...formData}
          updateFormData.images.push('')
          setFormData(updateFormData)
          }} type="button">Add Image</button>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
 
export default ReviewForm;