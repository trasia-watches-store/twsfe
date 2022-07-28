import axios from 'axios';
import React from 'react'
import FileBase64 from 'react-file-base64';
import { API_URL } from "../../constants";

async function getPresignedUploadUrl(bucket, directory) {
    const key = `${directory}/${uuid.v4()}`;
    const url = await s3
      .getSignedUrl('putObject', {
        Bucket: bucket,
        Key: key,
        ContentType: 'image/*',
        Expires: 300,
      })
      .promise();
    return url;
  }

const HomeWatches = () => {
    const [image, setImage] = React.useState('');
    // const handleFileUpload = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         const dataURL = reader.result;
    //         console.log(dataURL);
    //     }
    //     reader.readAsDataURL(file);
    // }

    const handleFileUpload = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}pics/`, image.image, {
            headers: {
                // 'Content-Type': 'file.type',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            console.log(response)
        })
    }

  return (
    <div>
        <h3>HomeWatches</h3>
        {/* <label onChange = {handleFileUpload} className = "custom-file-upload">
        <input type = "file" name = "image" />
         Upload Image
        </label> */}
        <form autoComplete='off' onSubmit={handleFileUpload}>
        <FileBase64
										type='file'
										multiple={false}
										name='image'
										onDone={({ base64 }) =>
											setImage({ ...image, image: base64 })
										}
									/>
                                    <button type='submit'>Edit this post?</button>
                                    </form>
                                    <img src={image.image} alt=""/>
    </div>
  )
}

export default HomeWatches