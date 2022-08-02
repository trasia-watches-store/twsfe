import React, { Fragment } from 'react'
import './Image.css'
import { CardImg } from 'reactstrap'

const Image = ({user, watch, img, setImg}) => {
    console.log(watch)
  return (
    <Fragment>
                  <CardImg style={{
                  width: "7rem",
                  height: "7rem"
                }} src={watch.wimage}/>
                
    </Fragment>
  )
}

export default Image