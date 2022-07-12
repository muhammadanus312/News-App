import { useState } from "react";
import React from "react";

const Newsitem=(props)=>{
    let { title, description, imageurl, newsurl, author, date } = props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By <em>{author}</em> On <em>{new Date(date).toGMTString()}</em>
              </small>
            </p>
            <a href={newsurl} target="_blank" className="btn btn-primary">
              View Details
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
