//State
//Component data called as State

//import React class
import React from "react";

interface IProps{}

interface IState{
    bal : number;
    bank : string;
    isElligible:boolean;
};


//create the component
class State extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            bal : 5000,
            bank : "Axis Bank",
            isElligible:true
        }; 
    };
    render(){
        return(
            <React.Fragment>
                Bal : {this.state.bal}
                <br></br>
                Bank : {this.state.bank} 
                <br></br>
                Elligibility : {JSON.stringify(this.state.isElligible)}
             </React.Fragment>
        )        
    }
};


export default State;
