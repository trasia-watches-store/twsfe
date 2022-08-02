import React, { Component } from "react";
import { Table, Card, CardImg } from "reactstrap";
import { AiOutlinePicture } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom"
import './WatchList.css'
import NewWatchModal from "../NewWatchModal/NewWatchModal";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";

class WatchList extends Component {
  render() {
    const watches = this.props.watches;
    return (
      <Table responsive dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            {/* <th>Image</th> */}
            <th>Edit/Remove</th>
          </tr>
        </thead>
        <tbody>
          {!watches || watches.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>No watch created yet</b>
              </td>
            </tr>
          ) : (
            watches.map(watch => (
              <tr key={watch.pk}>
                <td><Link to={`/managedb/${watch.pk}`} className="detailLink"><AiOutlinePicture className="icon"/> {watch.name}</Link></td>
                <td>{watch.type}</td>
                {/* <td>
                  <CardImg style={{
                  width: "7rem",
                  height: "7rem"
                }} src={watch.wimage}/>
                </td> */}
                {/* {console.log(watch.wimage)} */}
                {/* <td align="center" className="d-block-flex gap-2" style={{paddingBottom: '20px'}}> */}
                <td className="d-block-flex gap-2" style={{paddingBottom: '20px'}}>
                  <NewWatchModal
                    create={false}
                    watch={watch}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmDeleteModal
                    pk={watch.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default WatchList;