import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Menu from './Menu';
import SingleNews from './SingleNews';
import HotNews from './HotNews';
import NewNews from './NewNews';
export default class Index extends Component {
    constructor(props) {
        super();
        // Don't call this.setState() here!
        this.state = { data: [],load:false, dataNew:[] };
      }

    componentDidMount(){
        setInterval(function(){
          window.location.reload(false);
        },50000);
        fetch('http://localhost:2409/news', {
        method: 'GET',
            headers:{
            }
        })
        .then(res=>res.json())
        .then(data=>this.setState({data:data,load:true},()=>console.log (this.state.data)));
        fetch('http://localhost:2409/news/new', {
          method: 'GET',
              headers:{
              }
          })
          .then(res=>res.json())
          .then(data=>this.setState({dataNew:data},()=>console.log (this.state.dataNew)));
    }
    render() {

        return (
<div>      
<div className="preloader d-flex align-items-center justify-content-center">
  <div className="spinner">
    <div className="double-bounce1" />
    <div className="double-bounce2" />
  </div>
</div>
<header className="header-area">

  <div className="mag-main-menu" id="sticker">
            <div className="classy-nav-container breakpoint-off">
              {/* Menu */}
              <nav className="classy-navbar justify-content-between" id="magNav">
                {/* Nav brand */}
                  <b style={{fontSize:'2vw', color:"#E43970"}}>2 NEWS</b>
                {/* Navbar Toggler */}
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler"><span /><span /><span /></span>
                </div>
                {/* Nav Content */}
                <div className="nav-content d-flex align-items-center">
                  <div className="classy-menu">
                    {/* Close Button */}
                    <div className="classycloseIcon">
                      <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                    </div>
                    {/* Nav Start */}
                    <div className="classynav">
                      <ul>
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="archive.html">Archive</a></li>
                        <li><a href="#">Pages</a>
                          <ul className="dropdown">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="archive.html">Archive</a></li>
                            <li><a href="video-post.html">Single Video Post</a></li>
                            <li><a href="single-post.html">Single Post</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="submit-video.html">Submit Video</a></li>
                            <li><a href="login.html">Login</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Mega</a>
                          <div className="megamenu">
                            <ul className="single-mega cn-col-4">
                              <li><a href="index.html">Home</a></li>
                              <li><a href="archive.html">Archive</a></li>
                              <li><a href="video-post.html">Single Video Post</a></li>
                              <li><a href="single-post.html">Single Post</a></li>
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="contact.html">Contact</a></li>
                              <li><a href="login.html">Login</a></li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li><a href="index.html">Home</a></li>
                              <li><a href="archive.html">Archive</a></li>
                              <li><a href="video-post.html">Single Video Post</a></li>
                              <li><a href="single-post.html">Single Post</a></li>
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="contact.html">Contact</a></li>
                              <li><a href="login.html">Login</a></li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li><a href="index.html">Home</a></li>
                              <li><a href="archive.html">Archive</a></li>
                              <li><a href="video-post.html">Single Video Post</a></li>
                              <li><a href="single-post.html">Single Post</a></li>
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="contact.html">Contact</a></li>
                              <li><a href="login.html">Login</a></li>
                            </ul>
                            <ul className="single-mega cn-col-4">
                              <li><a href="index.html">Home</a></li>
                              <li><a href="archive.html">Archive</a></li>
                              <li><a href="video-post.html">Single Video Post</a></li>
                              <li><a href="single-post.html">Single Post</a></li>
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="contact.html">Contact</a></li>
                              <li><a href="login.html">Login</a></li>
                            </ul>
                          </div>
                        </li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </div>
                    {/* Nav End */}
                  </div>
                  <div className="top-meta-data d-flex align-items-center">
                    {/* Top Search Area */}
                    <div className="top-search-area">
                      <form action="index.html" method="post">
                        <input type="search" name="top-search" id="topSearch" placeholder="Search and hit enter..." />
                        <button type="submit" className="btn"><i className="fa fa-search" aria-hidden="true" /></button>
                      </form>
                    </div>
                    {/* Login */}
                    <a href="login.html" className="login-btn"><i className="fa fa-user" aria-hidden="true" /></a>
                    {/* Submit Video */}
                    <a href="submit-video.html" className="submit-video"><span><i className="fa fa-cloud-upload" /></span> <span className="video-text">Submit Video</span></a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          </header>

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
            {/* Single Blog Post */}
              <SingleNews/>
            {/* Single Blog Post */}
              <SingleNews/>
            {/* Single Blog Post */}
              <SingleNews/>
            {/* Single Blog Post */}
              <SingleNews/>
            {/* Single Blog Post */}

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
            {/* Single Blog Post */}
              <SingleNews/>
            {/* Single Blog Post */}
              <SingleNews/>
            {/* Single Blog Post */}
              <SingleNews/>
            {/* Single Blog Post */}
              <SingleNews/>
            {/* Single Blog Post */}

      </div>
      {/* Sidebar Widget */}


    </div>
    {/* >>>>>>>>>>>>>>>>>>>>
       Main Posts Area
  <<<<<<<<<<<<<<<<<<<<< */}
    <div className="mag-posts-content mt-30 mb-30 p-30 box-shadow">
      {/* Trending Now Posts Area */}
      <div className="trending-now-posts mb-30">
        {/* Section Title */}
        <div className="section-heading">
          <h5>TIN NÓNG</h5>
        </div>
        <div className="trending-post-slides " style={{textAlign:"center"}}>
            {/* Single Trending Post */}
            {
              this.state.load?(  
                <a href={this.state.data[0]['link']}>
                  <div className="single-trending-post">
                    <img src={this.state.data[0]["image"]}  alt="" />
                    <div className="post-content">
                      {/* <a href="#" className="post-cata">Sports</a> */}
                      <a href={this.state.data[0]['link']} className="post-title">{this.state.data[0]['title']}</a>
                    </div>
                  </div>
                </a>


              ):null
             

            }

            {/* Single Trending Post */}

        </div>
      </div>
 
    
      {/* Sports Videos */}
      <div className="sports-videos-area">
        {/* Section Title */}
        <div className="section-heading">
          <h5>TIN MỚI</h5>
        </div>
        <div className="sports-videos-slides owl-carousel mb-30">
        </div>
        <div className="row">
          {
            this.state.load?(
              this.state.dataNew.map((item)=>{
                return <NewNews title={item['title']} image={item['image']} link={item['link']}/>

              })
            ):null
          }
          {/* Single Blog Post */}
          <NewNews/>
          {/* Single Blog Post */}
          <NewNews/>
          {/* Single Blog Post */}
          <NewNews/>
          {/* Single Blog Post */}
          <NewNews/>
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
      <div className="single-sidebar-widget p-30">
        {/* Section Title */}
        <div className="section-heading">
          <h5>Thể loại</h5>
        </div>
        {/* Catagory Widget */}
        <ul className="catagory-widgets">
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Thời sự</span> <span>35</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Thế giới</span> <span>30</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Văn hoá</span> <span>13</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Thể thao</span> <span>06</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Đời sống</span> <span>28</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Tài chính kinh doanh</span> <span>08</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Giới trẻ</span> <span>13</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Giáo dục</span> <span>13</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Công nghệ</span> <span>13</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Sức khoẻ</span> <span>13</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Du lịch</span> <span>13</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Xe</span> <span>13</span></a></li>



        </ul>
      </div>
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
  <footer className="footer-area">
    <div className="container">
      <div className="row">
        {/* Footer Widget Area */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="footer-widget">
            {/* Logo */}
            <b style={{fontSize:"2vw", color:"rgb(228, 57, 112)"}}> 2 News</b>
            <p>Trang tổng hợp tin tức hàng đầu </p>
            <div className="footer-social-info">
              <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
              <a href="#" className="google-plus"><i className="fa fa-google-plus" /></a>
              <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
              <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
              <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
            </div>
          </div>
        </div>
        {/* Footer Widget Area */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="footer-widget">
            <h6 className="widget-title">Thể loại</h6>
            <nav className="footer-widget-nav">
              <ul>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Thời sự</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Thế giới</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Văn hoá</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Thể thao</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Đời sống</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Tài chính kinh doanh</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Giới trẻ</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Giáo dục</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Công nghệ</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Sức khoẻ</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Du lịch</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Xe</a></li>

                
              </ul>
            </nav>
          </div>
        </div>

        {/* Footer Widget Area */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="footer-widget">
            <h6 className="widget-title">Trang báo</h6>
            <ul className="footer-tags">
              <li><a href="#">Thanh niên</a></li>
              <li><a href="#">Vietnam.net</a></li>
              <li><a href="#">Zing.vn</a></li>
            </ul>
          </div>
        </div>
                {/* Footer Widget Area */}
                <div className="col-12 col-sm-6 col-lg-3">
          <div className="footer-widget">
            <h6 className="widget-title">Liên hệ</h6>
            {/* Single Blog Post */}
            <div className="single-blog-post style-2 d-flex">
              <p>hotro.abc@gmail.com</p>
            </div>
            {/* Single Blog Post */}
            
          </div>
        </div>
      </div>
    </div>
    {/* Copywrite Area */}
    <div className="copywrite-area">
      <div className="container">
        <div className="row">
          {/* Copywrite Text */}
          <div className="col-12 col-sm-6">
            <p className="copywrite-text">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Thiết kế bởi  <i className="fa fa-heart-o" aria-hidden="true" /> Quan Pham
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
          </div>
          <div className="col-12 col-sm-6">
            <nav className="footer-nav">
              <ul>
                <li><a href="#">Home</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* ##### Footer Area End ##### */}
</div>

        )
    }
}
