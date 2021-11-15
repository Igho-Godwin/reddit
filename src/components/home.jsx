import Header from "./header";
import Trends from "./trending";
import PopularPost from "./popularPost";
import PopularPostItem from "./popularPostItemCard";
import { Container } from "react-bootstrap";
import React from "react";
const Home = () => {
  return (
    <React.Fragment >
      <Container fluid>
        <Header />
      </Container>
      <Container className="padding-bottom-20">
        <Trends />
        <PopularPost />
        <PopularPostItem />
      </Container>
    </React.Fragment>
  );
};

export default Home;
