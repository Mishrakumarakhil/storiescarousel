import React, { Component } from "react";
import "./stories.css";
import { mobileProducts } from "../data";

let timmer;

class Stories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      value:0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.checkKey=this.checkKey.bind(this);
    this.automaticCall=this.automaticCall.bind(this);
  }

  increment=()=>{

    if(this.state.index<=2){

    this.setState((state) => {
        return {index: state.index + 1,value:state.value+25};
      });
    }
    else{

    alert("End Of Stories Press OK TO Restart The Story")
      this.setState((state) => {
        return {index: 0,value:0};
      });
    }
  }

   checkKey=(e)=>{
       console.log('xyz')
    e = e || window.event;

    if (e.keyCode === 37) {
      this.decrement();
         
    }
    else if (e.keyCode === 39) {
       this.increment();
    }

}
  decrement=()=>{

    if(this.state.index>0){

    this.setState((state) => {
        return {index: state.index - 1,value:state.value-25};
      });
  }
  
  else{
    this.setState((state) => {
      return {index: 0,value:0};
    });
  }
}
automaticCall=()=>{
  let auto=function(){ 
    this.increment();
   }
  timmer =setInterval(auto.bind(this), 5000);
}

  componentDidMount(){
   
      this.automaticCall()   
  }

  componentWillUnmount(){
    window.clearInterval(timmer)
   }
 
  render() {

    console.log(this.state,"state")
    return (
      <div className="story-container" tabIndex="0" onKeyDown={this.checkKey}>
        <div class="story-image">
         
                    
         <div className="data">
                 <img src={mobileProducts[this.state.index].pic_url} alt="" style={{width:"250px"}}/>
           </div>

        </div>

      <p className="Left" style={this.state.index === 0 ? { display: "none" }:null}>
            {" "}
            <i className="fas fa-angle-left"id="left_label"onClick={this.decrement}> </i>{" "}
      </p>
          
      <p
            className="Right"
            style={this.state.index === 3 ? { display: "none" } : null}
            onClick={this.increment}
       >
            <i className="fas fa-angle-right"id="right_label">  </i>
      </p>

          <progress id="file" value={this.state.value} max="100"/>

       
      </div>
    );
  }
}

export default Stories;