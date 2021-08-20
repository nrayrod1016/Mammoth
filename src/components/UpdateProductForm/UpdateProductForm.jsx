import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom"


import ImageInput from './ImageInput/ImageInput';
import VideoInput from './VideoInput/VideoInput';
import * as productService from '../../services/productService'

const UpdateProductForm = (props) => {
  const [formData, setFormData] = useState(props.product)
  const [validForm, setValidForm] = useState(false)

  const form = useRef()

  const history = useHistory()

  useEffect(() => {
    form.current.checkValidity() ? 
    setValidForm(true) : setValidForm(false)
  })

  const deleteImageInput = (idx) => {
    formData.pictures.splice(idx, 1)
    setFormData({...formData})
  }

  const deleteVideoInput = (idx) => {
    formData.videos.splice(idx, 1)
    setFormData({...formData})
  }

  const handleChangeImage = (idx, value) => {
    formData.pictures.splice(idx, 1, value)
    setFormData({...formData})
  }

  const handleChangeVideo = (idx, value) => {
    formData.videos.splice(idx, 1, value)
    setFormData({...formData})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    console.log('test')
    productService.update(formData, props.product._id)
    .then(product => {
      history.push("/")
    })
  }

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  return (
    <>
     <main class=" mt-10">
<div class="h-screen font-sans login bg-cover">
<div class="container mx-auto h-full flex flex-1 justify-center items-center">
<div class="w-full max-w-lg">
<div class="leading-loose">
<form class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
          autoComplete="off"
          onSubmit={handleSubmit}
          ref={form}
 >
    <h1 class="text-indigo-500 mb-2 font-medium text-center text-xl font-bold">Update Product</h1>
    <div >
        <label class="block text-lg text-black"
        >
        Name
        </label>
        <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"  
        type="text" 
        name="name" 
        value={formData.name}
        onChange={handleChange}
        required
        ></input>
      </div>
      <div>
        <label class="block text-md text-black"  
        >
        Tags
        </label>
        <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"  
        type="text" 
        name="tags"
        placeholder="please seperate tags with space"
        value={formData.tags}
        onChange={handleChange}
        ></input>
      </div>

      <div class="mt-2" >
        <label class="block  text-sm text-black">Snippet</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
         type="text" 
         name="snippet" 
         value={formData.snippet}
         onChange={handleChange}
         required
            >

          </input>
      </div>
      <div class="mt-2" >
        <label class="block  text-sm text-black">Description</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          >
          </input>
      </div>
      <div class="mt-2" >
        <label class="block  text-sm text-black">Inventory</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
          type="number" 
          name="inventory"
          min="1"
          value={formData.inventory}
          onChange={handleChange}
          required
          >

          </input>
      </div>
      <div class="mt-2" >
        <label class="block  text-sm text-black">Price</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="number" 
            name="price"
            min="1"
            value={formData.price}
            onChange={handleChange}
            required
          >

          </input>
      </div>
      <div class="mt-2" >
        <label class="block  text-sm text-black">Currency</label>
         <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              type="text" 
              name="currency" 
              value={formData.currency}
              onChange={handleChange}
              required
          >

            </input>
        </div>
       
        {formData.pictures?.map((image, idx) => 
          <ImageInput 
          handleChangeImage={handleChangeImage} 
          key={idx} 
          idx={idx} 
          image={image} 
          deleteImageInput={deleteImageInput} 
          />
        )}
        {formData.videos?.map((video, idx) => 
          <VideoInput 
          handleChangeVideo={handleChangeVideo} 
          key={idx} 
          idx={idx} 
          video={video} 
          deleteVideoInput={deleteVideoInput} 
          />
        )}


      <div class="mt-4 items-center flex justify-between">

        {/*  add styling to image and video inputs  */}
        <div 
          onClick={() => {
          let updateFormData = {...formData}
          updateFormData.videos.push('')
          setFormData(updateFormData)
          }} type="button" class="px-1 py-1 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-200 rounded"
         >
           Add Video
        </div>
       
          <div 
          onClick={() => {
          let updateFormData = {...formData}
          updateFormData.pictures.push('')
          setFormData(updateFormData)
          }} type="button" class="px-1 py-1 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-200 rounded">Add Image</div>
          
         
         
         <button  
         type="submit" 
         class="px-1 py-1 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-200 rounded"
         
         >
           Update
           </button>
       
      </div>
      

</form>

</div>
</div>
</div>
</div>
</main>
    </>
  );
}
 
export default UpdateProductForm;