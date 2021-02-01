import React from "react";

interface IState{}

interface IProps{}

class Childone extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <h2 style={{color:"springgreen"}}>Child One !!!</h2>
        )
    };
};

export default Childone;