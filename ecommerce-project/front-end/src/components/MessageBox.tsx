import React from "react";
interface IProps{
    variant : string;     //variant ==>  danger, success, info, warning,....
};
interface IState{};
export default class MessageBox extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
           <div className={`alert alert-${this.props.variant} || "info"`}>
                {this.props.children}
           </div>
        )
    };
};