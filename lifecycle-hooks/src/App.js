import React from "react";
import Child from "./Child";
export default class App extends React.Component{
      //constructor
      //constructor will execute at "booting" time
      //constructor will execute "only" once
      //in general, we will define "state" in constructor
      //its recomended to receive the "props" at booting time
      state = {
          name:"Hello"
      };
      constructor(){
          console.log("parent constructor");
          super();
          this.state = {
              name : "ashokit"
          };
      };

      componentWillMount(){
          //after constructor immidiately componentWillMount will execute.
          //componentWillMount will execute only "once" 
          //in general, we will place application level configurations
          //Ex.  window width, window height,.....
          console.log("parent componentWillMount");
          if(window.innerWidth<600){
            this.setState({
               width : window.innerWidth
            })
          }
      };


      //it will execute immidiately after "componentWillMount"
      //render() is the mandatory life cycle hook
      //in general, we will keep "presentation" logic
      //never change the state, inside the render()
      //render() function execute more than once based on state change
      
      my_fun = ()=>{
        this.setState({
          name : "reactjs"
        })
      };
      
      render(){
          console.log("parent render");
          return(
            <div>
                {this.state.name}
                <br></br>
                {this.state.width}
                <br></br>
                <Child key1={this.state.name}></Child>
                <br></br>
                <button onClick={this.my_fun}>Change</button>
            </div>
          )
      };

      componentDidMount(){
          //componentDidMount will execute after render()
          //in general, we will place asynchrnous calls logic
          //componentDidMount() life cycle hook, will execute only once
          //always first priority goes to child component
          console.log("parent componentDidMount");


          //parent constructor
          //parent componentWillMount
          //parent render

          //child constructor
          //child componentWillMount
          //child render

          //child componentDidMount
          //parent componentDidMount
      };


      //when ever component receives the props, then this life cycle hook will execute
      componentWillReceiveProps(){
         console.log("parent componentWillReceiveProps");
      };

      //it is used to control the updates(render) function execution
      shouldComponentUpdate(){
          return false;
      };

      componentDidUpdate(){}

      componentWillUnmount(){}



};