import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { removeVideoAPI, saveHistoryAPI } from "../services/allAPI";

const VideoCard = ({ displayData,setDeleteVideoResponseFromVideoCard,insideCategory }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    // display modal
    setShow(true);
    // to store history in json
    const { caption, youtubeLink } = displayData;
    const sysDateTime = new Date();
    console.log(sysDateTime.toLocaleString("en-US", { timeZoneName: "short" }));
    const timeStamp = sysDateTime.toLocaleString("en-US", {
      timeZoneName: "short",
    });
    const historyDetails = { caption, youtubeLink, timeStamp };
    try {
      await saveHistoryAPI(historyDetails);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteVideo = async (id)=>{
    try{
      const result = await removeVideoAPI(id)
      setDeleteVideoResponseFromVideoCard(result)
    }catch(err){
      console.log(err);
      
    }
  }
  const videoCardDragStarted = (e,dragVideoDetails)=>{
    console.log("Inside videoCardDragStarted with videoId: "+ dragVideoDetails?.id);
    // share data using event drag start
    e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
  }

  return (
    <>
      <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ width: "10rem" }} className="mt-3">
        <Card.Img
          onClick={handleShow}
          height={"150px"}
          variant="top"
          src={displayData?.imgUrl}
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <p style={{ color: "white" }}>{displayData?.caption}</p>
            {
              !insideCategory && <button onClick={()=>deleteVideo(displayData?.id)} className="btn">
              <i class="fa-solid fa-trash text-danger"></i>
            </button> 
            }
          </Card.Title>
        </Card.Body>
      </Card>
      {/* modal */}
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Encanto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            className="rounded"
            width="100%"
            height="315"
            src={`${displayData?.youtubeLink}?si=3bz9KTdehKYY34pf&autoplay=1`}
            title="Encanto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VideoCard;
