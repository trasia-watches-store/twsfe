import React, { Fragment, useEffect } from 'react'
import './WatchDetailPage.css'
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import WatchDetail from '../../components/WatchDetail/WatchDetail'
import Image from '../../components/Image/Image'
import { API_URL } from '../../constants'
import axios from 'axios'

const WatchDetailPage = ({user, watches, photos, setPhotos}) => {
    let { watch_pk } = useParams()
    let watch = watches.find(watch => watch.pk == watch_pk)
    // console.log(photos)
    const getPhotos = () => {
      axios.get(`${API_URL}pics`).then(res => {
        setPhotos(res.data)
        // console.log(photos)
      })
  }
  useEffect(() => {
    getPhotos()
  }, [])
  const resetPhotos = () => {
      getPhotos()
  }
  return (
    <Fragment>
      <Row>
        <Col>
      {/* image from watch model */}
      <Image user={user} watch={watch} photos={photos} setPhotos={setPhotos} resetPhotos={resetPhotos}/>
         </Col>
        <Col>
      {/* image from image model */}
      <WatchDetail user={user} watch={watch}/>
        </Col>
        </Row>
        <div className='dummy'></div>
    </Fragment>
  )
}

export default WatchDetailPage