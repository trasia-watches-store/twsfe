import React from 'react'
import { Form, Button } from 'reactstrap'
import { useState } from 'react'
import axios from 'axios'
import { API_URL_MAIN } from '../../constants'

const HomeWatches = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    image_url: "",
  })

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    image_url: "",
});

  let fileInput
  const handleChange = (evt) => {
    evt.preventDefault()
    // fileInput = evt.target.files[0]
    setData({ ...data, [evt.target.name]: evt.target.files[0] });
  }
  const handleChangeNoImage = (evt) => {
    evt.preventDefault()
    setData({ ...data, [evt.target.name]: evt.target.value });
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    console.log(data)
    axios.post(`${API_URL_MAIN}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Token ${localStorage.getItem('token')}`,
        // 'X-XSRF-Token': localStorage.getItem('csrf_token')
      }
    })

    // let formData = new FormData()
    // formData = {'file': fileInput}
    // console.log(formData)
    // const response = await fetch('http://localhost:8000/', {
    //   method: 'POST',
    //   body: data,
    //   headers: {
    //     'Authorization': `Token ${localStorage.getItem('token')}`,
    //     'Content-Type': 'multipart/form-data',
    //     // 'X-CSRF-TOKEN': 'CPvDyp90DbX97EQVmA0PAYspJUASglKVPS9rcN5vmU00JssSrY4QPVSF4dYnH4BB',
    //   }
    // }).then(response => {
    //   const data = response.json()
    // })
    // if(response.status === 400) {
    //   setErrors(response.data)
    // }
  }

  return (
    <div>
      <h1>HomeWatches</h1>
      <Form onSubmit={handleSubmit}>
        <input type='text' name='title' value={data.title} onChange={handleChangeNoImage}></input>
        <input type='file' name='image_url' onChange={handleChange}></input>
        <input type='textarea' name='description' value={data.description} onChange={handleChangeNoImage}></input>
        <Button>Upload</Button>
      </Form>
      <img src={fileInput} alt='fileInput'></img>

    </div>
  )
}

export default HomeWatches