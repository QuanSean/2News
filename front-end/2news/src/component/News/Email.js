import React, { Component } from 'react'

export default class Email extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
          host:'https://news-hai.herokuapp.com/'
          // host:'http://localhost:2409/'
          ,email: "", text:""};
        this.handleEmailChange = this.handleEmailChange.bind(this); 
        this.handleTextChange = this.handleTextChange.bind(this); 

      }


      handleEmailChange=(event)=>{
        this.setState({email: event.target.value});
      }
      handleTextChange=(event)=>{
        this.setState({text: event.target.value});
      }
      

      validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      onClick=()=>{

          console.log(this.validateEmail(this.state.email))

          if (this.validateEmail(this.state.email)&&this.state.text.length>0)
          {
            var details = {
              'email': this.state.email,
              'text': this.state.text
            };
            
            var formBody = [];
            for (var property in details) {
              var encodedKey = encodeURIComponent(property);
              var encodedValue = encodeURIComponent(details[property]);
              formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            // alert("email: "+this.state.email+ " text:"+this.state.text)
            fetch(this.state.host+'user/sendemailphanhoi', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: formBody
              })
              .then(res=>res.json())
              .then(data=>this.setState({data:data,load:true},()=>console.log (this.state.data)));
              alert('Cảm ơn bạn đã đóng góp ý kiến')

          }
          else
          {
            alert('Vui lòng nhập đúng và đầy đủ thông tin')
          }


 
      }


    componentDidMount(){
        
    }
    render() {
        return (
            <div className="single-sidebar-widget p-30">
            {/* Section Title */}
            <div className="section-heading">
              <h5>GÓP Ý</h5>
            </div>
            <div className="newsletter-form">
              <p>Chúng tôi rất mong muốn có được ý kiến góp ý từ bạn</p>
                <input type="email"  onChange={this.handleEmailChange} defaultValue={this.state.email}   value={this.state.email} name="widget-search" placeholder="Vui lòng nhập email" />
                <input type="text" onChange={this.handleTextChange} defaultValue={this.state.text}  value={this.state.text}  name="widget-search" placeholder="Ý kiến đóng góp" />
                <button type="submit" onClick={()=>this.onClick()} className="btn mag-btn w-100">Đồng ý</button>
            </div>
          </div>
        )
    }
}
