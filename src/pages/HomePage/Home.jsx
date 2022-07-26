import React, { Component, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import WatchList from "../../components/WatchList";
import NewWatchModal from "../../components/NewWatchModal";

import axios from "axios"

import { API_URL } from "../../constants"

class Home extends Component {
    state = {
        watches: []
    }

    componentDidMount() {
        this.resetState()
    }

    getWatches = () => {
        axios.get(API_URL).then(res => this.setState({ watches: res.data }))
    }

    resetState = () => {
        this.getWatches()
    }

    render() {
        return (
            <Container style={{  marginTop: "20px" }}>
                <Row>
                    <Col>
                        <WatchList 
                        watches={this.state.watches} 
                        resetState={this.resetState}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewWatchModal 
                        resetState={this.resetState} 
                        create={true}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}
// function Home() {
//     const [watches, setWatches] = useState([])

//     function componentDidMount() {
//         resetState()
//     }

//     const getWatches = () => {
//         axios.get(API_URL).then(res => setWatches({ watches: res.data }))
//     }

//     const resetState = () => {
//         getWatches()
//     }

//     return (
//         <Container style={{  marginTop: "20px" }}>
//             <Row>
//                 <Col>
//                     <WatchList 
//                     watches={watches} 
//                     resetState={resetState}
//                     />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <NewWatchModal 
//                     resetState={resetState} 
//                     create={true}
//                     />
//                 </Col>
//             </Row>
//         </Container>
//         )
// }

export default Home