import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";
// require('dotenv').config();
import InfiniteScroll from 'react-infinite-scroll-component';


export class Newsbody extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      // totalResults:0,
      loading: false,
      page: 1,
    };
    document.title = this.props.category + "--GettNews";
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da56685e2150488398fb5947b1ecc420&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let jsdata = await data.json();

    this.setState({
      articles: jsdata.articles,
      totalResults: jsdata.totalResults,
    });
    // console.log(this.state.articles.length);
  }
  async componentDidMount() {
   
    this.updateNews();
  }

  handlepreClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=da56685e2150488398fb5947b1ecc420&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pagesize}`;
    // let data = await fetch(url);
    // let jsdata = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: jsdata.articles,
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
    
  };

  handlenxtClick = async () => {
    // if (
    //   Math.ceil(this.state.totalresults / this.props.pagesize) <
    //   this.state.page + 1
    // ) {
    //   // console.log('inside if nextclick');
    // } else {
    //   // console.log('inside else nxtclick');
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=da56685e2150488398fb5947b1ecc420&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pagesize}`;
    //   let data = await fetch(url);
    //   let jsdata = await data.json();

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: jsdata.articles,
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
   fetchMoreData = async () => {
  this.setState({ page: this.state.page + 1 });
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da56685e2150488398fb5947b1ecc420&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let jsdata = await data.json();

    this.setState({
      articles: this.state.articles.concat(jsdata.articles),
      totalResults: jsdata.totalResults,
    });
  
  }

  render() {
    return (
      <div className="container " style={{marginTop:"90px"}}>
        <h2>Top {this.props.category} Headlines</h2>

        <hr />
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
        <div className="container">
        <div className="row my-4">
        
          {this.state.articles.map((ele) => {
            return (
              <div className="col-md-4" key={ele.url}>
                <NewsItems
                  imageUrl={
                    ele.urlToImage ? ele.urlToImage : require("../error404.jpg")
                  }
                  title={ele.title ? ele.title : "There is an intersting News"}
                  description={
                    ele.description
                      ? ele.description
                      : "There is an intersting News here you can read more"
                  }
                  url={ele.url}
                  author={ele.author ? ele.author : "Unknown"}
                  date={ele.publishedAt ? ele.publishedAt : "Unknown"}
                  sourcename={ele.source.name}
                />
              </div>
            );
          })}
          
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlepreClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              Math.ceil(this.state.totalResults / this.props.pagesize) <
              this.state.page + 1
            }
            className="btn btn-dark"
            onClick={this.handlenxtClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default Newsbody;
