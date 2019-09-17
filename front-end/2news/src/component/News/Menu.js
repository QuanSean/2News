import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Menu extends Component {
    render() {
        return (
<nav className=" navbar navbar-expand-lg navbar-light bg-light" style={{display:"fixed"}}>
  <a className="navbar-brand" href="#" style={{color:"#ED3974"}}><b>2 NEWS</b></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="" className="nav-link" href="#">Trang chủ <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Thể loại
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/category/thoisu" className="dropdown-item" href="#">Thời sự</Link>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item active">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" style={{marginBottom:"0", fontSize:"1.2em",padding:"15px"}} type="search" placeholder="Search" aria-label="Search" />
      <button className="btn my-2 my-sm-0" style={{background:"#ED3974",color:"#fff"}} type="submit">Search</button>
    </form>
  </div>
</nav>
        )
    }
}
