import React, { Fragment, useState } from 'react'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap'
import './Image.css'
import { CardImg } from 'reactstrap'
import axios from 'axios'
import { API_URL } from '../../constants'

const Image = ({user, watch, photos, setPhotos}) => {
    const [data, setData] = useState({
      image: '', 
      watch: watch.pk,
    })

    const onImageChange = (evt) => {
      evt.preventDefault();
      // console.log(evt.target.name)
      // console.log(evt.target.files[0])
      if (evt.target.files[0]) {
        setData({ ...data, [evt.target.name]: evt.target.files[0] });
      }
    };
    
    const createPhoto = (e) => {
      e.preventDefault();
      console.log(data)
    axios
      .post(`${API_URL}pics`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }, {
        body: data,
      }).then((response) => {
        console.log(response)
        // resetPhotos()
      })
  }

//   const getPhotos = () => {
//     axios.get(`${API_URL}${watch.pk}/pics`).then(res => {
//         // setPhotos(res.data)
//         // console.log(this.props.watches)
//             // this.props.setWatches({ watches: res.data })
//     })
// }

// const resetPhotos = () => {
//     getPhotos()
// }

  return (
    <Fragment>
      <Form onSubmit={createPhoto}>
      {/* <Form> */}
        <FormGroup>
          <Label for="image">Image:</Label>
          <Input
            type="file"
            name="image" 
            onChange={onImageChange}
          />
        </FormGroup>
        <Button style={{marginBottom: '10px'}}>Send</Button>
      </Form>
                  <CardImg style={{
                  width: "7rem",
                  height: "7rem"
                }} src={watch.wimage}/>
                {/* "http://localhost:8000/media/images/pexels-antony-trivet-9878293_RmkXyz4.jpg" */}
                {/* <CardImg style={{
                  width: "7rem",
                  height: "7rem"
                }} src="http://localhost:8000/media/images/pexels-antony-trivet-9878293_RmkXyz4.jpg"/> */}
    </Fragment>
  )
}

export default Image