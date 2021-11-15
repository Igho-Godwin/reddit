import {
  FaFire,
  FaRegNewspaper,
  FaAutoprefixer,
  FaEllipsisH,
  FaSort,
} from "react-icons/fa";
import { Dropdown, Col, Row, Container } from "react-bootstrap";

const PopularPost = () => {
  return (
      <Row className="margin-top-10 trends-container">
        <div className="font-14 margin-top-10">Popular posts</div>
        <Col sm={8}>
          <div className="post-filter">
            <div className="display-inline-block icon-text-color-blue grey-overlay padding-top-5 padding-bottom-5 border-radius-50 padding-left-10 padding-right-10">
              <FaFire /> <span className="padding-left-2 font-14">Hot</span>
            </div>
            <Dropdown className="display-inline-block margin-left-10 grey-overlay  border-radius-50 ">
              <Dropdown.Toggle
                variant="none"
                className="font-14 icon-text-color-blue"
                id="dropdown-basic"
              >
                Everywhere
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Everywhere</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="display-inline-block margin-left-10 text-color-light-black new padding-top-5 padding-bottom-5 border-radius-50 padding-left-10 padding-right-10">
              <FaRegNewspaper /> New
            </div>
            <div className="display-inline-block margin-left-10 text-color-light-black new padding-top-5 padding-bottom-5 border-radius-50 padding-left-10 padding-right-10">
              <FaAutoprefixer /> Top
            </div>
            <div className="display-inline-block margin-left-10 text-color-light-black new padding-top-5 padding-bottom-5 border-radius-50 padding-left-10 padding-right-10">
              <FaEllipsisH />
            </div>
            <div className="display-inline-block margin-left-140 text-color-light-black new padding-top-5 padding-bottom-5 border-radius-50 padding-left-10 padding-right-10">
              <FaSort />
            </div>
          </div>
        </Col>
        <Col className="background-color-white" sm={4}>Advert</Col>
      </Row>
  );
};

export default PopularPost;
