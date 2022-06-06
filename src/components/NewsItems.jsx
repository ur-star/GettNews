import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, imageUrl, url,description,author,date,sourcename } = this.props;
    let shorts = description.split(' ').slice(0, 16).join(' ');
    let newdate = new Date(date);
    return (
      <div>
        <div
          className="card my-2"
          style={{
            borderTop: "0.1em solid teal",
            boxSizing: "border-box",
            padding: "2px",
            margin: "4px",
          }}
        >
        <span class="position-absolute top-0 translate-middle badge rounded-pill " 
        style={{zIndex:"2", left:'80%',backgroundColor:"teal"}}>
          <i class="fas fa-star">{sourcename}</i>
           </span>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="Loading"
            style={{
              objectFit: "fill",
              boxSizing: "border-box",
              maxHeight: "200px",
            }}
          />
          <div className="card-body" >
            <h6 className="card-text">{title}</h6>
            <p  className="cart-text">{shorts}...</p>
            <p  className="cart-text"><small  className="text-muted">Last updated by {author} on {newdate.toGMTString()}</small></p>
            <a href={url} className="btn btn-primary btn-sm my-2">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
