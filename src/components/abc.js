import React, { Component } from "react";
import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner"
import InfiniteScroll from "react-infinite-scroll-component";

// import PropTypes from 'prop-types'

const News=(props)=>{

  // static defaultProps={
  //   category:'us',
  //   country:'sports',
  //   pagesize: 3
  // }
  // static propTypes={
  //   country:PropTypes.string,
  //   category:PropTypes.string,
  //   pagesize:PropTypes.number
  // }
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  
  // pagechange=()=>{

  // }
  useEffect(() => {
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6bb2f5b1301e402f9695a3cdc73eea76&page=1&pagesize=${props.pagesize}`
    setloading(true)
    props.changeProgress(20)
    let news=await fetch(url)
    props.changeProgress(40)
    let parsedata=await news.json()
    console.log(parsedata)
    setarticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    // this.setState({article:parsedata.articles,
    //               totalResults:parsedata.totalResults,
    //               loading:false})
    props.changeProgress(100)

  
    
  }, [])
  

  //   previouspage=async()=>{

  //       let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6bb2f5b1301e402f9695a3cdc73eea76&page=${this.state.page-1}&pagesize=${props.pagesize}`
  //     this.setState({loading:true})
  //       let news=await fetch(url)
  //       let parsedata=await news.json()
  //       console.log(parsedata)
  //       this.setState({page: this.state.page-1,
  //          article:parsedata.articles,
  //         loading:false})

  // }
  // nextpage=async ()=>{

  //   if( this.state.page+1 <= Math.ceil(this.state.totalResults/18))
  //   {
  //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6bb2f5b1301e402f9695a3cdc73eea76&page=${this.state.page+1}&pagesize=${props.pagesize}`
  //     this.setState({loading:true})
  //     let news=await fetch(url)
  //     let parsedata=await news.json()
  //     console.log(parsedata)
  //     this.setState({page: this.state.page+1, 
  //       article:parsedata.articles,
  //     loading:false})
  //   }

  // }

  const fetchMoreData = async () => {

    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6bb2f5b1301e402f9695a3cdc73eea76&page=${page+1}&pagesize=${props.pagesize}`
    setloading(true)
    // this.setState({loading:true})
      let news=await Promise.fetch(url)
      let parsedata=await Promise.news.json()
      console.log(parsedata)
      setarticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setpage(page+1)

  }
    // let totalpages=this.state.totalResults/18
    return (
      <div className="container my-3">
        <h1 class="text-center my-5" >TOP {props.category.toUpperCase()}-HEADLINES</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
         
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="row col-sm-3" style={{height:"500px"}}>
                {<Newsitem
                  title={element.title?element.title.slice(0,44):""}
                  description={element.description?element.description.slice(0,70):""}
                  imageurl={element.urlToImage?element.urlToImage:"https://www.reuters.com/resizer/KAf4i7XYIDNXov_OwYALRBGaOjU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CTTGGT3CJ5O5LN47HUXU4ZWJBE.jpg"}
                  newsurl={element.url} author={element.author?element.author:"unknown"} date={element.publishedAt}/>}
              </div>
            );
          })}
        </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.previouspage} class="btn btn-dark">previous</button>
        <button disabled={this.state.page>=totalpages} type="button" class="btn btn-dark" onClick={this.nextpage}>Next</button>

        </div> */}
      </div>
    );
  }


export default News;
