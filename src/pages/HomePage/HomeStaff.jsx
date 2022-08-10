import React, { Component, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import WatchList from "../../components/WatchList/WatchList";
import NewWatchModal from "../../components/NewWatchModal/NewWatchModal";

import axios from "axios"

import { API_URL } from "../../constants"

class Home extends Component {
    // state = {
    //     watches: []
    // }
    // state = this.props.watches
    componentDidMount() {
        // this.resetState()
        this.resetState()
        // console.log(this.props.watches)
        // console.log(this.props.setWatches)
    }

    getWatches = () => {
        // axios.get(API_URL).then(res => this.setState({ watches: res.data }))
        axios.get(API_URL).then(res => {
            this.props.setWatches(res.data)
            // console.log(this.props.user.pk)
                // this.props.setWatches({ watches: res.data })
        })
    }

    resetState = () => {
        this.getWatches()
    }

    render() {
        return (
            <Container style={{  marginTop: "0 auto", height:'100%' }}>
                <Row>
                    <Col>
                    <NewWatchModal 
                        resetState={this.resetState} 
                        create={true}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <WatchList 
                        watches={this.props.watches} 
                        user_pk={this.props.user.pk} 
                        resetState={this.resetState}
                        />
                        
                    </Col>
                </Row>
                 {/* add dummy space to overcome the sticky footer */}
            <div className="dummy" style={{height: '10%'}}/>
            </Container>
        )
    }
}
export default Home