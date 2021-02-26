import React from "react";
import Product from "../modal/Product";
//it is receiving array
//this component displays in the form of a "Card"
interface IProps{
    arr : Product[]
};
interface IState{};
class Products extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                { JSON.stringify(this.props.arr) }
            </React.Fragment>

        )
    };
};
export default Products;