import React, { Fragment, useState } from 'react'
import { Form, Label, Input, FormGroup, Button, Modal, ModalHeader, ModalFooter, Card, CardImg, CardText} from 'reactstrap'
import './Image.css'
import axios from 'axios'
import { API_URL } from '../../constants'

const Image = ({user, watch, photos, setPhotos}) => {
    const [data, setData] = useState({
      image: '', 
      watch: watch.pk,
    })
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
      setModal(!modal)
    }

// deleteWatch = pk => {
//   axios.delete(API_URL + pk).then(() => {
//       this.props.resetState()
//       this.toggle()
//   })
// }

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
      // console.log(data)
    axios
      .post(`${API_URL}pics`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }, {
        body: data,
      }).then((response) => {
        // console.log(response)
        resetPhotos()
      })
  }

  const getPhotos = () => {
    axios.get(`${API_URL}pics`).then(res => {
      setPhotos(res.data)
      // console.log(photos)
    })
}

const resetPhotos = () => {
    getPhotos()
}

const imageClick = (photoId) => {
  // event.preventDefault();
  console.log(photoId)
  axios.delete(`${API_URL}pics/` + photoId).then(() => {
    resetPhotos()
    toggleModal()
  })
}


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
                  <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {photos.map(photo => (
                  <Card 
                  style={{
                    width: "7rem",
                    height: "9rem",
                    margin: '5px',
                    border: '1px solid black',
                    alignItems: 'center',
                    padding:'10px'
                  }}
                  >
                    <CardImg style={{
                      width: "6rem",
                      height: "6rem",
                      marginBottom: '5px',
                      border: '1px solid black'
                    }} src={photo.image} 
                    />
                    <Button 
                    color='danger'
                    style={{
                    padding: '1px 10px', 
                  }}
                    onClick={() => toggleModal()}>Delete</Button>
                    {/* <CardText onClick={()=>imageClick(photo.id)}>
                    Delete
                      </CardText> */}
                <Modal isOpen={modal} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Confirm Delete</ModalHeader>
                    <ModalFooter>
                        <Button color="primary" onClick={() => imageClick(photo.id)}>Confirm</Button>
                        <Button color="secondary" onClick={() => toggleModal()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                  </Card>
                ))}
                </div>
    </Fragment>
  )
}

export default Image