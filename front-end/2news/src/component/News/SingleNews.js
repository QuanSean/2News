import React, { Component } from 'react'

export default class SingleNews extends Component {
    render() {
        return (
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
        )
    }
}
