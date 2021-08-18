import React from 'react';

const VideoInput = ({ video, idx, handleChangeVideo, deleteVideoInput }) => {

  const handleChange = evt => {
    handleChangeVideo(idx, evt.target.value)
  }

  return (
    <>
      <label class="block text-sm text-black" >Video:</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" required type="url" onChange={handleChange} value={video} />
      <button class="px-4 py-0 m-2 text-white font-light tracking-wider bg-red-500 hover:bg-red-300 rounded" type="button" onClick={() => deleteVideoInput(idx)}>Cancel</button>
    </>
  );
}
 
export default VideoInput;