import img1 from "./images/trendsImg1.jpeg";
import { Button, Col, Row, Image} from 'react-bootstrap';

const Trends = () => {
  return (
      <Row className="margin-top-10 trends-container">
        <div>Trending today</div>
        <Col sm={3} >
          <Image className="trends-img" src={img1} alt="" />
        </Col>
        <Col sm={3} >
          <Image className="trends-img" src={img1} alt="" />
        </Col>
        <Col sm={3} >
          <Image className="trends-img" src={img1} alt="" />
        </Col>
        <Col sm={3}  className="rm-1">
          <Image className="trends-img" src={img1} alt="" />
        </Col>
      </Row>
  );
};

export default Trends;
