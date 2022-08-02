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
                {/* "http://localhost:8000/media/images/pexels-antony-trivet-9878293_RmkXyz4.jpg" */}
                {/* <CardImg style={{
                  width: "7rem",
                  height: "7rem"
                }} src="http://localhost:8000/media/images/pexels-antony-trivet-9878293_RmkXyz4.jpg"/> */}
    </Fragment>
  )
}

export default Image