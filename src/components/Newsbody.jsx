import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class Newsbody extends Component {
  articles = [
   
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1,
    };
  }
  async componentDidMount(){
    let url='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=da56685e2150488398fb5947b1ecc420';
    let data = await fetch(url);
    let jsdata = await data.json();
  //   console.log(jsdata);
  this.setState({articles: jsdata.articles, totalresults:jsdata.totalResults})
}

   handlepreClick = async()=>{
    let url=`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=da56685e2150488398fb5947b1ecc420&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let jsdata = await data.json();
 
  this.setState({
    page: this.state.page-1,
    articles: jsdata.articles
  })
  };
  
  handlenxtClick = async()=>{
    if(Math.ceil(this.state.totalresults/12) < this.state.page+1){
      
    }
    else{let url=`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=da56685e2150488398fb5947b1ecc420&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let jsdata = await data.json();
   
    this.setState({
      page: this.state.page+1,
      articles: jsdata.articles
    })
  }
      
 };

 
   
  

  render() {
    return (
      <div className="container my-4">
        <h2>Top Headlines</h2>

        <hr />
        <div className="row my-4">
          {this.state.articles.map((ele) => {
            return (
              <div className="col-md-4" key={ele.url}>
                <NewsItems
                  imageUrl={ele.urlToImage}
                  title={ele.title?ele.title:"There is an intersting News"}
                  url={ele.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlepreClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handlenxtClick}>Next &rarr;</button>

        </div>
      </div>
     
    );
  }
}

export default Newsbody;
