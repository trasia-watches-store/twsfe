import React, { Fragment } from 'react'
import './WatchDetailPage.css'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { useParams } from 'react-router-dom'
import WatchDetail from '../../components/WatchDetail/WatchDetail'
import Image from '../../components/Image/Image'

const WatchDetailPage = ({user, watches, img, setImg}) => {
    let { watch_pk } = useParams()
    let watch = watches.find(watch => watch.pk == watch_pk)
    console.log(img)
  return (
    <Fragment>
      <Image user={user} watch={watch} img={img} setImg={setImg}/>
      <WatchDetail user={user} watch={watch}/>
        {/* <ListGroup>
            <ListGroupItem>Code: <b className='watch-detail'>{watch.productCode}</b></ListGroupItem>
            <ListGroupItem>Name: <b className='watch-detail'>{watch.name}</b></ListGroupItem>
            <ListGroupItem>Type: <b className='watch-detail'>{watch.type}</b></ListGroupItem>
            <ListGroupItem>Features: <b className='watch-detail'>{watch.features}</b></ListGroupItem>
            <ListGroupItem>Number of stocks: <b className='watch-detail'>{watch.stockNum}</b></ListGroupItem>
            <ListGroupItem>Brand: <b className='watch-detail'>{watch.brand}</b></ListGroupItem>
            <ListGroupItem>Family: <b className='watch-detail'>{watch.family}</b></ListGroupItem>
            <ListGroupItem>Model: <b className='watch-detail'>{watch.model}</b></ListGroupItem>
            <ListGroupItem>Limited: <b className='watch-detail'>{watch.limited}</b></ListGroupItem>
            <ListGroupItem>Water Resistance: <b className='watch-detail'>{watch.water_resistance_depth}</b></ListGroupItem>
            <ListGroupItem>Case description: <b className='watch-detail'>{watch.case_description}</b></ListGroupItem>
            <ListGroupItem>Dial description: <b className='watch-detail'>{watch.dial_description}</b></ListGroupItem>
            <ListGroupItem>Movement description: <b className='watch-detail'>{watch.movement_description}</b></ListGroupItem>
            <ListGroupItem>Image: <a className='watch-detail' href={watch.wimage}>Image</a></ListGroupItem>
        </ListGroup>
        <div className='dummy'></div> */}
    </Fragment>
  )
}

export default WatchDetailPage