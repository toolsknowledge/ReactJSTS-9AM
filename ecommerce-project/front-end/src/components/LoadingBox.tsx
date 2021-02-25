import React from "react";

interface IProps{}

interface IState{}

export default class LoadingBox extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                 <i className="fa fa-spinner fa-spin"></i>
            </React.Fragment>
        )
    };
};