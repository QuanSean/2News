import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Category extends Component {
    render() {
        return (
            <div className="single-sidebar-widget p-30">
            {/* Section Title */}
            <div className="section-heading">
              <h5>Thể loại</h5>
            </div>
            {/* Catagory Widget */}
            <ul className="catagory-widgets">
              <li><a href="/category/thoisu"  ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Thời sự</span> <span>35</span></a></li>
              <li><a href="/category/thegioi"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Thế giới</span> <span>30</span></a></li>
              <li>< a href="/category/vanhoa"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Văn hoá</span> <span>13</span></a></li>
              <li>< a href="/category/thetheo"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Thể thao</span> <span>06</span></a></li>
              <li>< a href="/category/doisong"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Đời sống</span> <span>28</span></a></li>
              <li>< a href="/category/taichinh"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Tài chính kinh doanh</span> <span>08</span></a></li>
              <li>< a href="/category/gioitre"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Giới trẻ</span> <span>13</span></a></li>
              <li>< a href="/category/giaoduc"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Giáo dục</span> <span>13</span></a></li>
              <li>< a href="/category/congnghe"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Công nghệ</span> <span>13</span></a></li>
              <li>< a href="/category/suckhoe" ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Sức khoẻ</span> <span>13</span></a></li>
              <li>< a href="/category/dulich" ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Du lịch</span> <span>13</span></a></li>
              <li>< a href="/category/xe" ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Xe</span> <span>13</span></a></li>
              <li>< a href="/category/game" ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Game</span> <span>13</span></a></li>
    
            </ul>
          </div>
        )
    }
}
