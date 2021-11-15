import { Col, Row, Image, Button } from "react-bootstrap";
import img from "./images/user.png";
import postsImg from "./images/posts.jpeg";
import {
  FaArrowDown,
  FaArrowUp,
  FaPlus,
  FaRegComments,
  FaShare,
  FaRegSave,
} from "react-icons/fa";

import {
    BsThreeDots
  } from "react-icons/bs";

const PopularPostItem = () => {
  return (
    <Row className="margin-top-16 trends-container">
      <Col sm={8}>
        <Row className="post-item-card margin-0">
          <Col sm={1} className="grey-overlay">
            <div className="padding-left-10">
              <FaArrowUp />
            </div>
            <div className="font-13 padding-left-5">
              <strong>16.3K</strong>
            </div>
            <div className="padding-left-10">
              <FaArrowDown />
            </div>
          </Col>
          <Col sm={11} className=" vertical-align-top padding-left-10">
            <Image
              className="user-blue-background "
              src={img}
              width={20}
              height={20}
              roundedCircle
            />
            <span className="margin-left-5 font-12">
              <strong>r/interestingasfuck</strong>
            </span>
            <span className="margin-left-5 font-11 grey-text">
              <strong>Posted byu/whodidussliberty_ 5 hours ago</strong>
            </span>
            <Button className="button-for-header font-12 join-btn">
              {" "}
              <FaPlus className="text-color-white" /> Join
            </Button>
            <div className="padding-top-10">
              <span>
                <strong>
                  [Giveaway] Giving out those for 2 of you, picked from random
                  comments in 24h, good luck!
                </strong>
              </span>
              <div>
                <Image src={postsImg} className="width-100" />
              </div>
            </div>
            <div className="font-13 padding-5">
              <span>
                <FaRegComments /> 23 comments
              </span>{" "}
              <span className="margin-left-20">
                <FaShare /> Share
              </span>
              <span className="margin-left-20">
                <FaRegSave /> Save
              </span>
              <span className="margin-left-20">
                <BsThreeDots />
              </span>
            </div>
          </Col>
        </Row>
      </Col>
      <Col className="background-color-white" sm={4}>Advert</Col>
    </Row>
  );
};

export default PopularPostItem;
