import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Footer extends Component {
    render() {
        return (
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
              <li><a href="/category/thegioi"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Thế giới</span></a></li>
              <li>< a href="/category/vanhoa"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Văn hoá</span> </a></li>
              <li>< a href="/category/thethao"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Thể thao</span></a></li>
              <li>< a href="/category/doisong"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Đời sống</span> </a></li>
              <li>< a href="/category/taichinh"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Tài chính kinh doanh</span></a></li>
              <li>< a href="/category/gioitre"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Giới trẻ</span> </a></li>
              <li>< a href="/category/giaoduc"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Giáo dục</span> </a></li>
              <li>< a href="/category/congnghe"   ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Công nghệ</span> </a></li>
              <li>< a href="/category/suckhoe" ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Sức khoẻ</span> </a></li>
              <li>< a href="/category/dulich" ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Du lịch</span> </a></li>
              <li>< a href="/category/xe" ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Xe</span> </a></li>
              <li>< a href="/category/game" ><span><i className="fa fa-angle-double-right" aria-hidden="true" /> Game</span> </a></li>
        
                        
                      </ul>
                    </nav>
                  </div>
                </div>
        
                {/* Footer Widget Area */}
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Trang báo</h6>
                    <ul className="footer-tags">
                      <li><a href="https://thanhnien.vn/">Thanh niên</a></li>
                      <li><a href="https://vietnamnet.vn/">Vietnam.net</a></li>
                      <li><a href="https://news.zing.vn/">Zing.vn</a></li>
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
                        <li><Link to="/" >Home</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}
