import React, { useState } from "react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";
import { saveVideoAPI } from "../services/allAPI";

const Add = ({setAddResponseFromHome}) => {
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imgUrl: "",
    youtubeLink: "",
  });
  const [invalidYoutubeLink, setInvalidYoutubeLink] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractEmbedLinkFromYoutubeLink = (userInputYoutubeLink) => {
    // Steps to create embed code from youtube link
    if (userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")) {
      const videoId = userInputYoutubeLink.split("v=")[1].slice(0, 11);
      setInvalidYoutubeLink(false);
      setVideoDetails({
        ...videoDetails,
        youtubeLink: `https://www.youtube.com/embed/${videoId}`,
      });
    } else {
      setVideoDetails({ ...videoDetails, youtubeLink: "" });
      setInvalidYoutubeLink(true);
    }
  };

  const handleUploadVideo = async () => {
    // object destructuring...
    const { caption, imgUrl, youtubeLink } = videoDetails;
    if (caption && imgUrl && youtubeLink) {
      try {
        const result = await saveVideoAPI(videoDetails);
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          alert("Video uploaded successfully");
          handleClose();
          // pass the result to view component
          setAddResponseFromHome(result)
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please fill all the form");
    }
  };
  return (
    <>
      <div className="d-flex align-items-center">
        <h4>Upload New Video</h4>
        <button
          onClick={handleShow}
          className="btn btn-warning rounded-circle ms-3 fw-bold fs-5"
        >
          +
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel
              controlId="floatingCaption"
              label="Caption"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, caption: e.target.value })
                }
                type="text"
                placeholder="Video Caption"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingUrl"
              label="Video Image Url"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, imgUrl: e.target.value })
                }
                type="text"
                placeholder="Video Image Url"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingLink"
              label="Video Youtube Link"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) =>
                  extractEmbedLinkFromYoutubeLink(e.target.value)
                }
                type="text"
                placeholder="Video Youtube Link"
              />
            </FloatingLabel>
            {invalidYoutubeLink && (
              <div className="text-danger">Invalid youtube link!!!</div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUploadVideo} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
