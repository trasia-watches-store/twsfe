import React, { Fragment } from 'react'
import './WatchDetailPage.css'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { useParams } from 'react-router-dom'
import WatchDetail from '../../components/WatchDetail/WatchDetail'
import Image from '../../components/Image/Image'

const WatchDetailPage = ({user, watches, photos, setPhotos}) => {
    let { watch_pk } = useParams()
    let watch = watches.find(watch => watch.pk == watch_pk)
    console.log(photos)
  return (
    <Fragment>
      {/* image from watch model */}
      <Image user={user} watch={watch} photos={photos} setPhotos={setPhotos}/>
      {/* image from image model */}
      <WatchDetail user={user} watch={watch}/>
        <div className='dummy'></div>
    </Fragment>
  )
}

export default WatchDetailPage