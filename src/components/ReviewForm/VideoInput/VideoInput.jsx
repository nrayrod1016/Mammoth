import React from 'react';

const VideoInput = ({ video, idx, handleChangeVideo, deleteVideoInput }) => {

  const handleChange = evt => {
    handleChangeVideo(idx, evt.target.value)
  }

  return (
    <>
      <label>Video:</label>
      <input type="url" onChange={handleChange} value={video} />
      <button type="button" onClick={() => deleteVideoInput(idx)}>Cancel</button>
    </>
  );
}
 
export default VideoInput;