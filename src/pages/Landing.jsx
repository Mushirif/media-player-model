// rafce
import React from "react";
import { Link } from "react-router-dom";
import LandingImg from "../assets/music.jpeg";
import feature1 from "../assets/feature1.jpeg";
import feature2 from "../assets/feature2.jpeg";
import feature3 from "../assets/feature3.jpeg";
import { Card, Button } from "react-bootstrap";
const Landing = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="container">
      {/*  landing part */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }}>
            Media Player App will allow user to add or remove their uploaded
            videos from youTube and also allow them to arrange it in different
            categories by drag and drop. User can also have the provision to
            manage their watch history as well. What are you waiting for, let
            starts exploring our site!!!
          </p>
          <Link to={"/home"} className="btn btn-info">
            Get Started
          </Link>
        </div>
        <div className="col"></div>
        {/* Landing image */}
        <div className="col-lg-6">
          <img src={LandingImg} className="img-fluid ms-5" alt="" />
        </div>
      </div>
      {/* features */}
      <div className="my-5 pb-5 ms-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5 mb-5">
          <div className="col-lg-4">
            <Card style={{ width: "18rem", zIndex:-1 }}>
              <Card.Img variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "18rem" , zIndex:-1 }}>
              <Card.Img variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Categories Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "18rem" , zIndex:-1 }}>
              <Card.Img variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5 fw-bold">Play Everything:</span> Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Aliquam quos eos culpa
            tenetur sunt natus similique doloremque corrupti ex accusamus illo
            doloribus vel, facere totam porro eaque fuga nihil quia!
          </p>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5 fw-bold">Managing Videos:</span> Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Aliquam quos eos culpa
            tenetur sunt natus similique doloremque corrupti ex accusamus illo
            doloribus vel, facere totam porro eaque fuga nihil quia!
          </p>
          <p style={{ textAlign: "justify" }}>
            <span className="fs-5 fw-bold">Categorise videos:</span> Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Aliquam quos eos culpa
            tenetur sunt natus similique doloremque corrupti ex accusamus illo
            doloribus vel, facere totam porro eaque fuga nihil quia!
          </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/AlOhcJ6twsc?si=XCUTwvXg795cHtha"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Landing;
