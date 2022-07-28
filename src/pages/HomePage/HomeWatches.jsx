import S3 from 'react-aws-s3';
import { useRef } from 'react';

export default function HomeWatches(){
    function handleClick(){
        console.log("clicked")
    }
  return (
    <>
      <form className='upload-steps' onSubmit={handleClick}>
        {/* <label>
          Upload file:
          <input type='file' name='fileInput' />
        </label>
        <br /> */}
        <button type='submit'>Upload</button>
      </form>
    </>
  );
}