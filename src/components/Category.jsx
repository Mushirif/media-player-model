import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import {
  deleteCatogoryAPI,
  getAllCategoryAPI,
  removeVideoAPI,
  saveCategoryAPI,
  updateCategoryAPI,
} from "../services/allAPI";
import { useEffect } from "react";
import VideoCard from "./VideoCard";
const Category = ({
  setDeleteResponseFromCategory,
  deleteResponseFromView,
}) => {
  const [allCategories, setAllCategories] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    getAllCategories();
  }, [deleteResponseFromView]);
  const handleSaveCategory = async () => {
    if (categoryName) {
      const categorydetails = { categoryName, allVideos: [] };
      try {
        const result = await saveCategoryAPI(categorydetails);
        alert("category Created");
        getAllCategories();
        handleClose();
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("please provide a category Name!!!");
    }
  };
  const getAllCategories = async () => {
    try {
      const result = await getAllCategoryAPI();
      if (result.status >= 200 && result.status < 300) {
        setAllCategories(result.data);
      } else {
        console.log();
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(allCategories);

  const removeCategory = async (id) => {
    try {
      await deleteCatogoryAPI(id);
      getAllCategories();
    } catch (err) {
      console.log(err);
    }
  };
  const dragOverCategory = (e) => {
    e.preventDefault();
  };
  const videoCardDropOverCategory = async (e, categoryDetails) => {
    console.log("inside videoCardDropOverCategory");
    // console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"));
    console.log(videoDetails);

    // update category by add video to its allVideos
    categoryDetails.allVideos.push(videoDetails);
    console.log(categoryDetails);

    // api call to update the category
    await updateCategoryAPI(categoryDetails);
    getAllCategories();
    const result = await removeVideoAPI(videoDetails?.id);
    setDeleteResponseFromCategory(result);
  };
  const categoryVideoDragStarted = (e, dragVideoDetails, categoryDetails) => {
    console.log("inside CategoryVideoDragStarted");
    let dragData = { video: dragVideoDetails, categoryDetails };
    e.dataTransfer.setData("dragData", JSON.stringify(dragData));
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>All Categories</h3>
        <button
          onClick={handleShow}
          className="btn btn-info ms-3 rounded-circle ms-3 fw-bolder fs-5"
        >
          +
        </button>
      </div>

      {/* display all categoires */}
      <div className="container-fluid mb-5 mt-2">
        {/* single category view */}
        {allCategories?.length > 0 ? (
          allCategories?.map((categoryDetails) => (
            <div className="border rounded p-3 mb-3" key={categoryDetails?.id}>
              <div
                droppable="true"
                onDragOver={dragOverCategory}
                onDrop={(e) => videoCardDropOverCategory(e, categoryDetails)}
                key={categoryDetails?.id}
                className="d-flex justify-content-between"
              >
                <h5>{categoryDetails?.categoryName} </h5>
                <button
                  onClick={() => removeCategory(categoryDetails?.id)}
                  className="btn"
                >
                  <i class="fa-solid fa-trash text-danger"></i>
                </button>
              </div>
              {/* Display category video */}
              <div className="row mt-2">
                {categoryDetails?.allVideos?.length > 0 &&
                  categoryDetails?.allVideos?.map((video) => (
                    <div
                      draggable={true}
                      onDragStart={(e) =>
                        categoryVideoDragStarted(e, video, categoryDetails)
                      }
                      key={video?.id}
                      className="col-lg-4"
                    >
                      <VideoCard insideCategory={true} displayData={video} />
                    </div>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <div className="fw-bolder text-danger fs-5">
            No Categories are added yet!!!
          </div>
        )}
      </div>

      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>All Category Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingCategoryName"
            label="Category Name"
            className="mb-3"
          >
            <Form.Control
              onChange={(e) => setCategoryName(e.target.value)}
              type="text"
              placeholder="Category Name"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Category;
