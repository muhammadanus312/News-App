import React from "react";
import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner"
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=>{

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  useEffect(() => {
    document.title=`${props.category}-News`
    update()
  }, [])
  

  const update=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6bb2f5b1301e402f9695a3cdc73eea76&page=${page}&pagesize=${props.pagesize}`

    // this.setState({loading:true})
    setloading(true)
    props.changeProgress(20)
    let news=await fetch(url)
    props.changeProgress(40)
    let parsedata=await news.json()
    console.log(parsedata)
    setarticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setloading(false)
    
    props.changeProgress(100)
  }

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
    // this.setState({loading:true})
    setloading(true)
      let news=await fetch(url)
      let parsedata=await news.json()
      console.log(parsedata)
      setpage(page+1)
      setarticles(articles.concat(parsedata.articles))
      setloading(false)
  };
    // let totalpages=this.state.totalResults/18
  // console.log(totalpages)
    return (
      <div className="container my-3">
        <h1 class="text-center" style={{marginTop:"80px"}} >TOP {props.category.toUpperCase()}-HEADLINES</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
         
        <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="row col-sm-4" style={{height:"500px"}}>
                {<Newsitem
                  title={element.title?element.title.slice(0,44):""}
                  description={element.description?element.description.slice(0,70):""}
                  imageurl={element.urlToImage?element.urlToImage:"https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"}
                  newsurl={element.url} author={element.author?element.author:"unknown"} date={element.publishedAt}/>}
              </div>
            );
          })}
        </div>
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
