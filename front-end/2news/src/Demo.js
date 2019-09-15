import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default class Demo extends Component {
    constructor(props) {
        super();
        // Don't call this.setState() here!
        this.state = { data: [],load:false };
      }

    componentDidMount(){
        fetch('http://localhost:2409/news', {
        method: 'GET',
            headers:{
            }
        })
        .then(res=>res.json())
        .then(data=>this.setState({data:data,load:true},()=>console.log (this.state.data[0]["image"])))
    }
    render() {

        return (
<div>
  {/* Preloader */}
  <div className="preloader d-flex align-items-center justify-content-center">
    <div className="spinner">
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </div>
  </div>
  <header className="header-area">
  {/* Navbar Area */}
  <div className="mag-main-menu" id="sticker">
    <div className="classy-nav-container breakpoint-off">
      {/* Menu */}
      <nav className="classy-navbar justify-content-between" id="magNav">
        {/* Nav brand */}
        <a href="index.html" className="nav-brand"><img src="img/core-img/logo.png" alt="" /></a>
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
          <h5>Most Popular</h5>
        </div>
        {/* Single Blog Post */}
        <div className="single-blog-post d-flex">
          <div className="post-thumbnail">
            <img src="img/bg-img/4.jpg" alt="" />
          </div>
          <div className="post-content">
            <a href="single-post.html" className="post-title">Global Travel And Vacations Luxury Travel</a>
            <div className="post-meta d-flex justify-content-between">
              <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 34</a>
              <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</a>
              <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</a>
            </div>
          </div>
        </div>
        {/* Single Blog Post */}
        <div className="single-blog-post d-flex">
          <div className="post-thumbnail">
            <img src="img/bg-img/5.jpg" alt="" />
          </div>
          <div className="post-content">
            <a href="single-post.html" className="post-title">Cruising Destination Ideas</a>
            <div className="post-meta d-flex justify-content-between">
              <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 34</a>
              <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</a>
              <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</a>
            </div>
          </div>
        </div>
        {/* Single Blog Post */}
        <div className="single-blog-post d-flex">
          <div className="post-thumbnail">
            <img src="img/bg-img/6.jpg" alt="" />
          </div>
          <div className="post-content">
            <a href="single-post.html" className="post-title">The Luxury Of Traveling With</a>
            <div className="post-meta d-flex justify-content-between">
              <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 34</a>
              <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</a>
              <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</a>
            </div>
          </div>
        </div>
        {/* Single Blog Post */}
        <div className="single-blog-post d-flex">
          <div className="post-thumbnail">
            <img src="img/bg-img/7.jpg" alt="" />
          </div>
          <div className="post-content">
            <a href="single-post.html" className="post-title">Choose The Perfect Accommodations</a>
            <div className="post-meta d-flex justify-content-between">
              <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 34</a>
              <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</a>
              <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</a>
            </div>
          </div>
        </div>
        {/* Single Blog Post */}
        <div className="single-blog-post d-flex">
          <div className="post-thumbnail">
            <img src="img/bg-img/8.jpg" alt="" />
          </div>
          <div className="post-content">
            <a href="single-post.html" className="post-title">A Guide To Rocky Mountain Vacations</a>
            <div className="post-meta d-flex justify-content-between">
              <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 34</a>
              <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</a>
              <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</a>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar Widget */}
      <div className="single-sidebar-widget">
        <a href="#" className="add-img"><img src="img/bg-img/add.png" alt="" /></a>
      </div>
      {/* Sidebar Widget */}
      <div className="single-sidebar-widget p-30">
        {/* Section Title */}
        <div className="section-heading">
          <h5>Latest Videos</h5>
        </div>
        {/* Single Blog Post */}
        <div className="single-blog-post d-flex">
          <div className="post-thumbnail">
            <img src="img/bg-img/9.jpg" alt="" />
          </div>
          <div className="post-content">
            <a href="single-post.html" className="post-title">Coventry City Guide Including Coventry</a>
            <div className="post-meta d-flex justify-content-between">
              <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 34</a>
              <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</a>
              <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</a>
            </div>
          </div>
        </div>
        {/* Single Blog Post */}
        <div className="single-blog-post d-flex">
          <div className="post-thumbnail">
            <img src="img/bg-img/10.jpg" alt="" />
          </div>
          <div className="post-content">
            <a href="single-post.html" className="post-title">Choose The Perfect Accommodations</a>
            <div className="post-meta d-flex justify-content-between">
              <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 34</a>
              <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</a>
              <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</a>
            </div>
          </div>
        </div>
        {/* Single Blog Post */}
        <div className="single-blog-post d-flex">
          <div className="post-thumbnail">
            <img src="img/bg-img/11.jpg" alt="" />
          </div>
          <div className="post-content">
            <a href="single-post.html" className="post-title">Get Ready Fast For Fall Leaf Viewing</a>
            <div className="post-meta d-flex justify-content-between">
              <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 34</a>
              <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</a>
              <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</a>
            </div>
          </div>
        </div>
        {/* Single Blog Post */}
        <div className="single-blog-post d-flex">
          <div className="post-thumbnail">
            <img src="img/bg-img/12.jpg" alt="" />
          </div>
          <div className="post-content">
            <a href="single-post.html" className="post-title">Global Resorts Network Grn Putting</a>
            <div className="post-meta d-flex justify-content-between">
              <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 34</a>
              <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</a>
              <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</a>
            </div>
          </div>
        </div>
        {/* Single Blog Post */}
        <div className="single-blog-post d-flex">
          <div className="post-thumbnail">
            <img src="img/bg-img/13.jpg" alt="" />
          </div>
          <div className="post-content">
            <a href="single-post.html" className="post-title">Travel Prudently Luggage And Carry</a>
            <div className="post-meta d-flex justify-content-between">
              <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 34</a>
              <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</a>
              <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* >>>>>>>>>>>>>>>>>>>>
       Main Posts Area
  <<<<<<<<<<<<<<<<<<<<< */}
    <div className="mag-posts-content mt-30 mb-30 p-30 box-shadow">
      {/* Trending Now Posts Area */}
      <div className="trending-now-posts mb-30">
        {/* Section Title */}
        <div className="section-heading">
          <h5>TRENDING NOW</h5>
        </div>
        <div className="trending-post-slides ">
            <Carousel>
          {/* Single Trending Post */}
          <div className="single-trending-post">
            <img src="img/bg-img/19.jpg" alt="" />
            <div className="post-content">
              <a href="#" className="post-cata">Video</a>
              <a href="video-post.html" className="post-title">Big Savings On Gas While You Travel</a>
            </div>
          </div>
          {/* Single Trending Post */}
          <div className="single-trending-post">
            <img src="img/bg-img/20.jpg" alt="" />
            <div className="post-content">
              <a href="#" className="post-cata">TV Show</a>
              <a href="video-post.html" className="post-title">A Guide To Rocky Mountain Vacations</a>
            </div>
          </div>
          {/* Single Trending Post */}
          <div className="single-trending-post">
            <img src="img/bg-img/21.jpg" alt="" />
            <div className="post-content">
              <a href="#" className="post-cata">Sports</a>
              <a href="video-post.html" className="post-title">The Health Benefits Of Sunglasses</a>
            </div>
          </div>
          {/* Single Trending Post */}
          <div className="single-trending-post">
            <img src="img/bg-img/19.jpg" alt="" />
            <div className="post-content">
              <a href="#" className="post-cata">Video</a>
              <a href="video-post.html" className="post-title">Big Savings On Gas While You Travel</a>
            </div>
          </div>
          {/* Single Trending Post */}
          <div className="single-trending-post">
            <img src="img/bg-img/20.jpg" alt="" />
            <div className="post-content">
              <a href="#" className="post-cata">TV Show</a>
              <a href="video-post.html" className="post-title">A Guide To Rocky Mountain Vacations</a>
            </div>
          </div>
          {/* Single Trending Post */}
          <div className="single-trending-post">
            <img src="img/bg-img/21.jpg" alt="" />
            <div className="post-content">
              <a href="#" className="post-cata">Sports</a>
              <a href="video-post.html" className="post-title">The Health Benefits Of Sunglasses</a>
            </div>
          </div>
          </Carousel>
        </div>
      </div>
 
    
      {/* Sports Videos */}
      <div className="sports-videos-area">
        {/* Section Title */}
        <div className="section-heading">
          <h5>Sports Videos</h5>
        </div>
        <div className="sports-videos-slides owl-carousel mb-30">
        </div>
        <div className="row">
          {/* Single Blog Post */}
          <div className="col-12 col-lg-6">
            <div className="single-blog-post d-flex style-3 mb-30">
              <div className="post-thumbnail">
                <img src="img/bg-img/31.jpg" alt="" />
              </div>
              <div className="post-content">
                <a href="single-post.html" className="post-title">From Wetlands To Canals And Dams Amsterdam Is Alive</a>
                <div className="post-meta d-flex">
                  <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 1034</a>
                  <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 834</a>
                  <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 234</a>
                </div>
              </div>
            </div>
          </div>
          {/* Single Blog Post */}
          <div className="col-12 col-lg-6">
            <div className="single-blog-post d-flex style-3 mb-30">
              <div className="post-thumbnail">
                <img src="img/bg-img/32.jpg" alt="" />
              </div>
              <div className="post-content">
                <a href="single-post.html" className="post-title">From Wetlands To Canals And Dams Amsterdam Is Alive</a>
                <div className="post-meta d-flex">
                  <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 1034</a>
                  <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 834</a>
                  <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 234</a>
                </div>
              </div>
            </div>
          </div>
          {/* Single Blog Post */}
          <div className="col-12 col-lg-6">
            <div className="single-blog-post d-flex style-3 mb-30">
              <div className="post-thumbnail">
                <img src="img/bg-img/33.jpg" alt="" />
              </div>
              <div className="post-content">
                <a href="single-post.html" className="post-title">From Wetlands To Canals And Dams Amsterdam Is Alive</a>
                <div className="post-meta d-flex">
                  <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 1034</a>
                  <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 834</a>
                  <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 234</a>
                </div>
              </div>
            </div>
          </div>
          {/* Single Blog Post */}
          <div className="col-12 col-lg-6">
            <div className="single-blog-post d-flex style-3 mb-30">
              <div className="post-thumbnail">
                <img src="img/bg-img/34.jpg" alt="" />
              </div>
              <div className="post-content">
                <a href="single-post.html" className="post-title">From Wetlands To Canals And Dams Amsterdam Is Alive</a>
                <div className="post-meta d-flex">
                  <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 1034</a>
                  <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 834</a>
                  <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 234</a>
                </div>
              </div>
            </div>
          </div>
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
          <h5>Categories</h5>
        </div>
        {/* Catagory Widget */}
        <ul className="catagory-widgets">
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Life Style</span> <span>35</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Travel</span> <span>30</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Foods</span> <span>13</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Game</span> <span>06</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Sports</span> <span>28</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Football</span> <span>08</span></a></li>
          <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /> TV Show</span> <span>13</span></a></li>
        </ul>
      </div>
      {/* Sidebar Widget */}
      <div className="single-sidebar-widget">
        <a href="#" className="add-img"><img src="img/bg-img/add2.png" alt="" /></a>
      </div>
      {/* Sidebar Widget */}
      <div className="single-sidebar-widget p-30">
        {/* Section Title */}
        <div className="section-heading">
          <h5>Hot Channels</h5>
        </div>
        {/* Single YouTube Channel */}
        <div className="single-youtube-channel d-flex">
          <div className="youtube-channel-thumbnail">
            <img src="img/bg-img/14.jpg" alt="" />
          </div>
          <div className="youtube-channel-content">
            <a href="single-post.html" className="channel-title">TV Show</a>
            <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true" /> Subscribe</a>
          </div>
        </div>
        {/* Single YouTube Channel */}
        <div className="single-youtube-channel d-flex">
          <div className="youtube-channel-thumbnail">
            <img src="img/bg-img/15.jpg" alt="" />
          </div>
          <div className="youtube-channel-content">
            <a href="single-post.html" className="channel-title">Game Channel</a>
            <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true" /> Subscribe</a>
          </div>
        </div>
        {/* Single YouTube Channel */}
        <div className="single-youtube-channel d-flex">
          <div className="youtube-channel-thumbnail">
            <img src="img/bg-img/16.jpg" alt="" />
          </div>
          <div className="youtube-channel-content">
            <a href="single-post.html" className="channel-title">Sport Channel</a>
            <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true" /> Subscribe</a>
          </div>
        </div>
        {/* Single YouTube Channel */}
        <div className="single-youtube-channel d-flex">
          <div className="youtube-channel-thumbnail">
            <img src="img/bg-img/17.jpg" alt="" />
          </div>
          <div className="youtube-channel-content">
            <a href="single-post.html" className="channel-title">Travel Channel</a>
            <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true" /> Subscribe</a>
          </div>
        </div>
        {/* Single YouTube Channel */}
        <div className="single-youtube-channel d-flex">
          <div className="youtube-channel-thumbnail">
            <img src="img/bg-img/18.jpg" alt="" />
          </div>
          <div className="youtube-channel-content">
            <a href="single-post.html" className="channel-title">LifeStyle Channel</a>
            <a href="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true" /> Subscribe</a>
          </div>
        </div>
      </div>
      {/* Sidebar Widget */}
      <div className="single-sidebar-widget p-30">
        {/* Section Title */}
        <div className="section-heading">
          <h5>Newsletter</h5>
        </div>
        <div className="newsletter-form">
          <p>Subscribe our newsletter gor get notification about new updates, information discount, etc.</p>
          <form action="#" method="get">
            <input type="search" name="widget-search" placeholder="Enter your email" />
            <button type="submit" className="btn mag-btn w-100">Subscribe</button>
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
            <a href="index.html" className="foo-logo"><img src="img/core-img/logo2.png" alt="" /></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
            <h6 className="widget-title">Categories</h6>
            <nav className="footer-widget-nav">
              <ul>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Life Style</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Tech</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Travel</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Music</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Foods</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Fashion</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Game</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Football</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> Sports</a></li>
                <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /> TV Show</a></li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Footer Widget Area */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="footer-widget">
            <h6 className="widget-title">Sport Videos</h6>
            {/* Single Blog Post */}
            <div className="single-blog-post style-2 d-flex">
              <div className="post-thumbnail">
                <img src="img/bg-img/12.jpg" alt="" />
              </div>
              <div className="post-content">
                <a href="single-post.html" className="post-title">Take A Romantic Break In A Boutique Hotel</a>
                <div className="post-meta d-flex justify-content-between">
                  <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 34</a>
                  <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</a>
                  <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</a>
                </div>
              </div>
            </div>
            {/* Single Blog Post */}
            <div className="single-blog-post style-2 d-flex">
              <div className="post-thumbnail">
                <img src="img/bg-img/13.jpg" alt="" />
              </div>
              <div className="post-content">
                <a href="single-post.html" className="post-title">Travel Prudently Luggage And Carry On</a>
                <div className="post-meta d-flex justify-content-between">
                  <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 34</a>
                  <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</a>
                  <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Widget Area */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="footer-widget">
            <h6 className="widget-title">Channels</h6>
            <ul className="footer-tags">
              <li><a href="#">Travel</a></li>
              <li><a href="#">Fashionista</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">DESIGN</a></li>
              <li><a href="#">NEWS</a></li>
              <li><a href="#">TRENDING</a></li>
              <li><a href="#">VIDEO</a></li>
              <li><a href="#">Game</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Lifestyle</a></li>
              <li><a href="#">Foods</a></li>
              <li><a href="#">TV Show</a></li>
              <li><a href="#">Twitter Video</a></li>
              <li><a href="#">Playing</a></li>
              <li><a href="#">clips</a></li>
            </ul>
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
              This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by Sean
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
          </div>
          <div className="col-12 col-sm-6">
            <nav className="footer-nav">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Advertisement</a></li>
                <li><a href="#">Contact Us</a></li>
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
