import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ height: "300px" }} className="mt-5 container w-100">
      <div className="d-flex justify-content-between">
        {/* intro */}
        <div style={{ width: "400px" }}>
          <h5>
            {" "}
            <i class="fa-solid fa-music me-2"></i>Media Player
          </h5>
          <p>
            Designed and built with all the love in the world by the Bootstrap
            team with the help of our contributors.
          </p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* Links */}
        <div style={{width:"200px"}} className="d-flex flex-column">
          <h5>Links</h5>
          <Link to={"/"} style={{textDecoration:"none",color:"white"}}>Landing page</Link>
          <Link to={"/home"} style={{textDecoration:"none",color:"white"}}>Home page</Link>
          <Link to={"/history"} style={{textDecoration:"none",color:"white"}}>History page</Link>
        </div>
        {/* guides */}
        <div style={{width:"200px"}} className="d-flex flex-column">
          <h5>Guides</h5>
          <a style={{textDecoration:"none", color:"white"}} target="_blank" href="https://react.dev/">React</a>
          <a style={{textDecoration:"none", color:"white"}} target="_blank" href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
          <a style={{textDecoration:"none",  color:"white"}} target="_blank" href="https://reactrouter.com/">React Router</a>
        </div>
        {/* contact */}
        <div style={{width:"300px"}} className="d-flex flex-column">
        <h5>Cosntacts Us</h5>
        <div className="d-flex">
          <input type="text" placeholder="Enter your Email here..." className="form-control me-2"/>
          <button className="btn btn-info"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <a style={{textDecoration:"none", color:"white"}} href="https://en.wikipedia.org/wiki/Twitter" target="_blank"><i class="fa-brands fa-twitter"></i></a>
          <a style={{textDecoration:"none", color:"white"}} href="https://en.wikipedia.org/wiki/Instagram" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a style={{textDecoration:"none", color:"white"}} href="https://en.wikipedia.org/wiki/LinkedIn" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          <a style={{textDecoration:"none", color:"white"}} href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i></a>
          <a style={{textDecoration:"none", color:"white"}} href="https://www.youtube.com/" target="_blank"><i class="fa-solid fa-phone"></i></a>
          <a style={{textDecoration:"none", color:"white"}} href="https://en.wikipedia.org/wiki/GitHub" target="_blank"><i class="fa-brands fa-github"></i></a>
          
        </div>
        </div>
      </div>
      <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default Footer;
