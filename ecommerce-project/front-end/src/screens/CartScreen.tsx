import React from "react";
import { match as Match } from "react-router-dom";
import { Location } from "history";
interface routeParams{
    id:any;
};
interface IProps{
    match:Match<routeParams>;
    location:Location;
}
interface IState{}
class CartScreen extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        console.log( this.props.location.search.split("=")[1] );
    };
    render(){
        const qty = this.props.location.search?Number(this.props.location.search.split("=")[1]):1;
        return(
            <React.Fragment>
                <h1>Product ID : {this.props.match.params.id}.....qty : {qty} </h1>

            </React.Fragment>
        )
    }
};

export default CartScreen;