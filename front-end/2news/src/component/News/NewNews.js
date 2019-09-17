import React, { Component } from 'react'

export default class NewNews extends Component {
    render() {
        return (
            <div className="col-12 col-lg-6">
                <div className="single-blog-post d-flex style-3 mb-30">
                <div className="post-thumbnail">
                    <img src={this.props.image} alt="" />
                </div>
                <div className="post-content">
                    <a  href={this.props.link} style={{cursor:"pointer",marginBottom:"0"}} className="post-title">{this.props.title}</a>
                    <p>{this.props.sourename}</p>

                    <div className="post-meta d-flex">
                    {/* <a href="#"><i className="fa fa-eye" aria-hidden="true" /> 1034</a>
                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 834</a>
                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true" /> 234</a> */}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
