// rce
import React from 'react'
import { Link } from 'react-router-dom'
// import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
// import { Form } from "react-bootstrap";
const Navbar=()=>{
    // const [val, setVal] = useState();
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/General">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Technology">Technology</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    )
  }

export default Navbar