import React from "react";

interface IState{
    num : number
};

interface IProps{

};

class State extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            num : 0
        }
    };
    increment = (data:number)=>{
        this.setState({
            num : this.state.num + data
        })
    };
    decrement = (data:number)=>{
        this.setState({
            num : this.state.num - data
        })
    };
    render(){
        return(
            <React.Fragment>
                Number : {this.state.num}  <br></br>
                {/* <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>        */}

                <button onClick={()=>{ this.increment(2) }}>Increment</button>
                <button onClick={()=>{ this.decrement(3) }}>Decrement</button>
               
            </React.Fragment>
        )
    }
};

export default State;