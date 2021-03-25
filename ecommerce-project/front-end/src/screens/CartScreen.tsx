import React from "react";
import { match as Match, NavLink,BrowserRouter } from "react-router-dom";
import { Location } from "history";
import { connect } from "react-redux";
import getCartItems from "../actions/CartActions";

interface routeParams{
    id:any;
};
interface IProps{
    match:Match<routeParams>;
    location:Location;
    addToCartItems:any;
    final_arr:any;
}
interface IState{}

class CartScreen extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };

    componentDidMount(){
        const qty = this.props.location.search?Number(this.props.location.search.split("=")[1]):1;
        this.props.addToCartItems(this.props.match.params.id,qty);
    };

    render(){
        const qty = this.props.location.search?Number(this.props.location.search.split("=")[1]):1;
        return(

            <React.Fragment>
                
                    <NavLink to="/" exact={true} strict>Back To Screen</NavLink>
                
                    <h1>Product ID : {this.props.match.params.id}.....qty : {qty} </h1>
                    {JSON.stringify(this.props.final_arr)}
               
            </React.Fragment>
        )
    }
};

const receive = (state:any)=>{
    return{
        final_arr : state.cart
    }
}

const send = (dispatch:any)=>{
    return{
        addToCartItems : (arg1:any,arg2:any)=>{ dispatch( getCartItems(arg1,arg2) ) }
    }
}

export default connect(receive,send)(CartScreen);


