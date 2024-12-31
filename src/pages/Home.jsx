import React, { useState } from "react";
import Add from "../components/Add";
import View from "../components/View";
import Category from "../components/Category";
import { Link } from "react-router-dom";

const Home = () => {
  const [deleteResponseFromView,setDeleteResponseFromView]= useState("")
  const [deleteResponseFromCategory, setDeleteResponseFromCategory] = useState("");
  const [addResponseFromHome, setAddResponseFromHome] = useState("");
  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <div className="d-flex justify-content-between container mb-5">
        <Add setAddResponseFromHome={setAddResponseFromHome} />
        <Link to={"/history"}>Watch history</Link>
      </div>
      <div className="container-fluid my-5 row">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View setDeleteResponseFromView={setDeleteResponseFromView} deleteResponseFromCategory={deleteResponseFromCategory} addResponseFromHome={addResponseFromHome} />
        </div>
        <div className="col-lg-6">
          <Category deleteResponseFromView={deleteResponseFromView} setDeleteResponseFromCategory={setDeleteResponseFromCategory} />
        </div>
      </div>
    </div>
  );
};

export default Home;
