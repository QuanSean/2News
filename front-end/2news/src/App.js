import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from './component/News/Menu';

import RouteApp from './component/router';
function App() {
  return (
    <Router>
        {/* Preloader */}
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="spinner">
          <div className="double-bounce1" />
          <div className="double-bounce2" />
        </div>
      </div>
      <header className="header-area">
      {/* Navbar Area */}
          {/* <Menu/> */}
      </header>
      <RouteApp/>
    </Router>
  );
}

export default App;
