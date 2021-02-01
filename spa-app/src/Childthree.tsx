import React from "react";

interface IState{}

interface IProps{}

class Childthree extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <h2 style={{color:"purple"}}>Child Three !!!</h2>
        )
    };
};

export default Childthree;