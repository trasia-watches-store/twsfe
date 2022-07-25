import { Col, Container, Row } from 'reactstrap';
import WatchList from './WatchList';
import NewWatchModal from './NewWatchModal';
import axios from axios
import { API_URL } from '../constants/index';

export default Home = (props) => {
    const [watches, setWatches] = useState([]);

    function componentDidMount() {
        resetWatch();
    }

    function resetWatch() {
        getWatches({});
    }

    function getWatches() {
        axios.get(API_URL).then(res => setWatches({watches: res.data}));
    }

    return(
        <Container style={{ marginTop: "20px" }}>
            <Row>
                <Col>
                    <WatchList watches={watches} resetWatch={resetWatch}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <NewWatchModal create={true} resetWatch={resetWatch}/>
                </Col>
            </Row>
        </Container>
    )
}