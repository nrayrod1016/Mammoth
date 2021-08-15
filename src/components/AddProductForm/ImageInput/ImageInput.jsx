import React from 'react';

const ImageInput = ({ image, idx, handleChangeImage, deleteImageInput }) => {

  const handleChange = (evt) => {
    handleChangeImage(idx, evt.target.value)
  }

  return (
    <>
    <label>Image:</label>
      <input onChange={handleChange} type="url" required  value={image} />
      <button type="button" onClick={() => deleteImageInput(idx)}>Cancel</button>
    </>
  );
}
 
export default ImageInput;