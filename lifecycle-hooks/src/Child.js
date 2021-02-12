import React from "react";
export default class Child extends React.Component{
      constructor(){
          super();
          console.log("child constructor");
      };

      componentWillMount(){
          console.log("child componentWillMount");
          if(window.innerWidth<600){
            this.setState({
               width : window.innerWidth
            })
          }
      };


    
      render(){
          console.log("child render");
          return(
            <div>
                {this.props.key1}
            </div>
          )
      };

      componentDidMount(){
         
          console.log("child componentDidMount");
      };


      componentWillReceiveProps(){
        console.log("child componentWillReceiveProps");
      };

     shouldComponentUpdate(){
        return false;
     };

};