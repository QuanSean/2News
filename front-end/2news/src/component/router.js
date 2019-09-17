import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './News/Index'
export default class router extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Index}/>

            </div>
        )
    }
}
