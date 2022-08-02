import React from 'react'
import './WatchDetailPage.css'
import { ListGroup, ListGroupItem } from 'reactstrap'

const WatchDetailPage = ({user, watches}) => {
    let watch = watches.find(watch => watch.pk == 19)
    console.log(user)
  return (
    <div>WatchDetailPage</div>
  )
}

export default WatchDetailPage