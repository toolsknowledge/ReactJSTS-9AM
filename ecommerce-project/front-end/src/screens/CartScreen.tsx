import React from "react";
import { match as Match, NavLink,BrowserRouter } from "react-router-dom";
import { Location } from "history";
import { connect } from "react-redux";
import getCartItems from "../actions/CartActions";
import { removeItem } from "../actions/CartActions";



interface routeParams{
    id:any;
};
interface IProps{
    match:Match<routeParams>;
    location:Location;
    addToCartItems:any;
    final_arr:any;
    removeItemProps:any;
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

    removeItem = (id:any)=>{
        this.props.removeItemProps(id);
    };

    render(){
        return(

            <React.Fragment>
                
                    <NavLink to="/" exact={true} strict>Back To Screen</NavLink>

                    <br></br><br></br>
                
                   

                    <div className="row top">
                        <div className="col-2">
                            <ul>
                                {this.props.final_arr.finalArray.map((obj:any)=>(
                                    <li className="row">
                                        <div>
                                            <img src={obj.image} alt={obj.name} className="small"></img>
                                        </div>

                                        <div>
                                            <button onClick={()=>{this.removeItem(obj._id)}}>Delete</button>
                                        </div>
                                    </li>
                                ))}     
                            </ul>
                       
                        </div>
                    </div>


               
            </React.Fragment>
        )
    }
};

//subscription
const receive = (state:any)=>{
    return{
        final_arr : state.cart
    }
}


//dispatch
const send = (dispatch:any)=>{
    return{
        addToCartItems : (arg1:any,arg2:any)=>{ dispatch( getCartItems(arg1,arg2) ) },

        removeItemProps : (arg1:any)=>{ dispatch(removeItem(arg1)) }
    }
}

export default connect(receive,send)(CartScreen);


