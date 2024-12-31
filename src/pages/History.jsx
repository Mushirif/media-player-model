import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteHistoryAPI, getAllHistoryAPI } from "../services/allAPI";

const History = () => {
  const [allVideoHistory,setAllVideohistory]= useState([])
  useEffect(()=>{
    getAllHistory()
  },[])
  const getAllHistory = async () => {
    try {
      const result = await getAllHistoryAPI()
      if(result.status>=200 && result.status<300){
        setAllVideohistory(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  };
  const removeHistory = async (id) =>{
    try{
      await deleteHistoryAPI(id)
      getAllHistory()
    }catch(err){
      console.log(err);
      
    }
  }

  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="container d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={"/home"}>Back to Home</Link>
      </div>
      <table className="container my-5 table text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>TimeStamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            allVideoHistory?.length>0?
            allVideoHistory.map((videoDetails,index)=>(
              <tr key={videoDetails?.id}>
            <td>{index+1}</td>
            <td>{videoDetails?.caption}</td>
            <td>{videoDetails?.youtubeLink}</td>
            <td>{videoDetails?.timeStamp}</td>
            <td>
              <button onClick={()=>removeHistory(videoDetails?.id)} className="btn">
                <i class="fa-solid fa-trash text-danger"></i>
              </button>
            </td>
          </tr>
            )):
            <div className="fw-bolder">You didn't Watch any video yet!</div>
          }
        </tbody>
      </table>
    </div>
  );
};

export default History;
