import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './News/Index'
import Detail from './News/Detail/Detail'

export default class router extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Index}/>
                <Route exact path="/category/:idcategory" component={Detail}/>

            </div>
        )
    }
}
