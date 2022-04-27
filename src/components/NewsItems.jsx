import React, { Component } from "react";

export class NewsItems extends Component {
  
  render() {
    let { title, imageUrl,url } = this.props;
    return (
      <div>
        <div className="card my-2" style={{ width: "18rem",borderTop:'0.1em solid teal', boxSizing:"border-box",padding:'2px'}}>
          <img src={imageUrl} className="card-img-top" alt="Loading" style={{objectFit:"fill", boxSizing:"border-box",maxHeight:'180px'}} />
          <div className="card-body">
            <h6 className="card-text">{title}</h6>
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
