import React from "react";
import newsimg from "../assets/News.jpeg"
const NewsItem = ({title, description, src, url}) => {
  return (  
    <>
      <div className="card bg-dark text-light d-inline-block mx-1 my-2 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={src?src:newsimg} style={{height:"200px" , width:"330px"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href={url} className="btn btn-primary">
            Read Details
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
