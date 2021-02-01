import React from "react";

interface IState{}

interface IProps{}

class Childtwo extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <h2 style={{color:"pink"}}>Child Two !!!</h2>
        )
    };
};

export default Childtwo;