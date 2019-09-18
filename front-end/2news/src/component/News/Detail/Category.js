import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Menu from '../Menu';
import SingleNews from '../SingleNews';
import HotNews from '../HotNews';
import NewNews from '../NewNews';
import InfiniteScroll from 'react-infinite-scroll-component';
import Category from '../Category';
import Footer from '../Footer';
export default class Detail extends Component {
    constructor(props) {
        super();
        // Don't call this.setState() here!
        this.state = {host:'https://news-hai.herokuapp.com/', data: [],load:false, dataNew:[],dataThoiSu:[],dataTheThao:[],category:'' };
      }
      componentWillMount(){
        
      }
    componentDidMount(){
        setInterval(function(){
          window.location.reload(false);
        },100000);

        
        fetch("https://news-hai.herokuapp.com/news/"+this.props.match.params.idcategory, {
        method: 'GET',
            headers:{
            }
        })
        .then(res=>res.json())
        .then(data=>this.setState({data:data,load:true},()=>console.log (this.state.data)));
        
        
        
        fetch('https://news-hai.herokuapp.com/news/new', {
          method: 'GET',
              headers:{
              }
          })
          .then(res=>res.json())
          .then(data=>this.setState({dataNew:data}));
    

        fetch('https://news-hai.herokuapp.com/news/thoisuhome', {
          method: 'GET',
              headers:{
              }
          })
          .then(res=>res.json())
          .then(data=>this.setState({dataThoiSu:data}));
  
        fetch('https://news-hai.herokuapp.com/news/thethaohome', {
          method: 'GET',
              headers:{
              }
          })
          .then(res=>res.json())
          .then(data=>this.setState({dataTheThao:data}));
    
    
    }
    render() {

        return (
<div>      




{/* ##### Header Area End ##### */}


 
  {/* ##### Mag Posts Area Start ##### */}
  <section className="mag-posts-area d-flex flex-wrap">
    {/* >>>>>>>>>>>>>>>>>>>>
   Post Left Sidebar Area
  <<<<<<<<<<<<<<<<<<<<< */}
    <div className="post-sidebar-area left-sidebar mt-30 mb-30 bg-white box-shadow">
      {/* Sidebar Widget */}
      <div className="single-sidebar-widget p-30">
            {/* Section Title */}
            <div className="section-heading">
              <h5>Thời sự</h5>
            </div>
            {
              this.state.load?(
                this.state.dataThoiSu.map((item)=>{
                  return(
                    <SingleNews sourename={item.sourename} image={item.image} link={item.link} title={item.title}/>
                  )
                })
              ):(                  
                <div className="wrapper">
                  <div className="card-loader card-loader--tabs" />
                </div>)
            }


      </div>
          
        
      {/* Sidebar Widget */}
      <div className="single-sidebar-widget">
        <a href="#" className="add-img"><img src="img/bg-img/add.png" alt="" /></a>
      </div>
      {/* Sidebar Widget */}
      <div className="single-sidebar-widget p-30">
            {/* Section Title */}
            <div className="section-heading">
              <h5>Thể thao</h5>
            </div>
            {
              this.state.load?(
                this.state.dataTheThao.map((item)=>{
                  return(
                    <SingleNews sourename={item.sourename}  image={item.image} link={item.link} title={item.title}/>
                  )
                })
              ):(                  
              <div className="wrapper">
                <div className="card-loader card-loader--tabs" />
              </div>)
            }
            


      </div>
      {/* Sidebar Widget */}


    </div>
    {/* >>>>>>>>>>>>>>>>>>>>
       Main Posts Area
  <<<<<<<<<<<<<<<<<<<<< */}
    <div className="mag-posts-content mt-30 mb-30 p-30 box-shadow">
      {/* Trending Now Posts Area */}

 
    
      {/* Sports Videos */}
      <div className="sports-videos-area">
        {/* Section Title */}
        <div className="section-heading">
          <h5>TIN TỨC</h5>
        </div>
        <div className="sports-videos-slides owl-carousel mb-30">
        </div>
        <div className="row">
          {
            this.state.load?(
              this.state.data.map((item)=>{
                return <NewNews sourename={item.sourename}  title={item['title']} image={item['image']} link={item['link']}/>

              })
            ):(
              <div className='row' style={{width:"100%"}}>
                <div className="col-12 col-md-6"> 
                  <div className="wrapper">
                    <div className="card-loader card-loader--tabs" />
                  </div>
                </div>
                <div className="col-12 col-md-6"> 
                  <div className="wrapper">
                    <div className="card-loader card-loader--tabs" />
                  </div>
                </div>
                <div className="col-12 col-md-6"> 
                  <div className="wrapper">
                    <div className="card-loader card-loader--tabs" />
                  </div>
                </div>
                <div className="col-12 col-md-6"> 
                  <div className="wrapper">
                    <div className="card-loader card-loader--tabs" />
                  </div>
                </div>
                <div className="col-12 col-md-6"> 
                  <div className="wrapper">
                    <div className="card-loader card-loader--tabs" />
                  </div>
                </div>
                <div className="col-12 col-md-6"> 
                  <div className="wrapper">
                    <div className="card-loader card-loader--tabs" />
                  </div>
                </div>
              </div>


            )
          }
        </div>
      </div>
    </div>
    {/* >>>>>>>>>>>>>>>>>>>>
   Post Right Sidebar Area
  <<<<<<<<<<<<<<<<<<<<< */}
    <div className="post-sidebar-area right-sidebar mt-30 mb-30 box-shadow">
      {/* Sidebar Widget */}
      <div className="single-sidebar-widget p-30">
        {/* Social Followers Info */}
        <div className="social-followers-info">
          {/* Facebook */}
          <a href="#" className="facebook-fans"><i className="fa fa-facebook" /> 4,360 <span>Fans</span></a>
          {/* Twitter */}
          <a href="#" className="twitter-followers"><i className="fa fa-twitter" /> 3,280 <span>Followers</span></a>
          {/* YouTube */}
          <a href="#" className="youtube-subscribers"><i className="fa fa-youtube" /> 1250 <span>Subscribers</span></a>
          {/* Google */}
          <a href="#" className="google-followers"><i className="fa fa-google-plus" /> 4,230 <span>Followers</span></a>
        </div>
      </div>
      {/* Sidebar Widget */}
      <Category/>
      {/* Sidebar Widget */}
      <div className="single-sidebar-widget">
        <a href="#" className="add-img"><img src="img/bg-img/add2.png" alt="" /></a>
      </div>
      {/* Sidebar Widget */}
  
      {/* Sidebar Widget */}
      <div className="single-sidebar-widget p-30">
        {/* Section Title */}
        <div className="section-heading">
          <h5>GÓP Ý</h5>
        </div>
        <div className="newsletter-form">
          <p>Chúng tôi rất mong muốn có được ý kiến góp ý từ bạn</p>
          <form action="#" method="get">
            <input type="email" name="widget-search" placeholder="Vui lòng nhập email" />
            <input type="text" name="widget-search" placeholder="Ý kiến đóng góp" />
            <button type="submit" className="btn mag-btn w-100">Đồng ý</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* ##### Mag Posts Area End ##### */}
  {/* ##### Footer Area Start ##### */}
  <Footer/>
  {/* ##### Footer Area End ##### */}
</div>

        )
    }
}
