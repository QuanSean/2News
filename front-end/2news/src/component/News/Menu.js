import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
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
        )
    }
}
