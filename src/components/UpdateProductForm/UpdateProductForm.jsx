import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from "react-router-dom"


import ImageInput from './ImageInput/ImageInput';
import VideoInput from './VideoInput/VideoInput';
import * as productService from '../../services/productService'

const UpdateProductForm = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState('test')
  const [validForm, setValidForm] = useState(false)

  const form = useRef()

  const history = useHistory()

  useEffect(() => {
    form.current.checkValidity() ? 
    setValidForm(true) : setValidForm(false)
  })

  useEffect(() => {
    productService.getDetails(id)
    .then(product => {
      setFormData(product)
    })
  }, [])

  const deleteImageInput = (idx) => {
    formData.images.splice(idx, 1)
    setFormData({...formData})
  }

  const deleteVideoInput = (idx) => {
    formData.videos.splice(idx, 1)
    setFormData({...formData})
  }

  const handleChangeImage = (idx, value) => {
    formData.images.splice(idx, 1, value)
    setFormData({...formData})
  }

  const handleChangeVideo = (idx, value) => {
    formData.videos.splice(idx, 1, value)
    setFormData({...formData})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    productService.create(formData, id)
    .then(product => {
      history.push("/")
    })
  }

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  return (
    <>
      <form onSubmit={handleSubmit} ref={form}>
        <label>Name:</label>
        <input 
        type="text" 
        name="name" 
        value={formData.name}
        onChange={handleChange}
        required
        />
        <label>Tags:</label>
        <input 
        type="text" 
        name="tags"
        placeholder="please seperate tags with space"
        value={formData.tags}
        onChange={handleChange}
        />
        <label>Snippet:</label>
        <input 
        type="text" 
        name="snippet" 
        value={formData.snippet}
        onChange={handleChange}
        required
        />
        <label>Description</label>
        <textarea
        name="desc"
        onChange={handleChange}
        >{formData.desc}</textarea>
        <label>Inventory:</label>
        <input 
        type="number" 
        name="inventory"
        min="1"
        value={formData.inventory}
        onChange={handleChange}
        required
        />
        <label>Price:</label>
        <input 
        type="number" 
        name="price"
        min="1"
        value={formData.price}
        onChange={handleChange}
        required
        />
        <label>Currency:</label>
        <input 
        type="text" 
        name="currency" 
        value={formData.currency}
        onChange={handleChange}
        required
        />
        {formData.images?.map((image, idx) => 
          <ImageInput handleChangeImage={handleChangeImage} key={idx} idx={idx} image={image} deleteImageInput={deleteImageInput} />
        )}
        {formData.videos?.map((video, idx) => 
          <VideoInput handleChangeVideo={handleChangeVideo} key={idx} idx={idx} video={video} deleteVideoInput={deleteVideoInput} />
        )}
        <button onClick={() => {
          let updateFormData = {...formData}
          updateFormData.videos.push('')
          setFormData(updateFormData)
          }} type="button">Add Video</button>
        <button onClick={() => {
          let updateFormData = {...formData}
          updateFormData.images.push('')
          setFormData(updateFormData)
          }} type="button">Add Image</button>
        <button type="submit" disabled={!validForm}>Add Product</button>
      </form>
    </>
  );
}
 
export default UpdateProductForm;