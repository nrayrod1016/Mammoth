import React from 'react';

const ImageInput = ({ image, idx, handleChangeImage, deleteImageInput }) => {

  const handleChange = (evt) => {
    handleChangeImage(idx, evt.target.value)
  }

  return (
    <>
    <label class="block text-sm text-black">Image</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" onChange={handleChange} type="url" required  value={image} />
      <button class="px-4 py-0 m-2 text-white font-light tracking-wider bg-red-500 hover:bg-red-300 rounded" type="button" onClick={() => deleteImageInput(idx)}>Cancel</button>
    </>
  );
}
 
export default ImageInput;