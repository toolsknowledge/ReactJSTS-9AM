import React from "react";
interface IProps{}
interface IState{}



class ProductScreen extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                Product Details Soon....!
            </React.Fragment>
        )
    }
};

export default ProductScreen;