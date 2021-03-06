import React from "react";
import Product from "../modal/Product";
import Rating from "./Rating";
import { BrowserRouter as Router,NavLink } from "react-router-dom";

//it is receiving array
//this component displays in the form of a "Card"

//row
//center
//card
//medium
//card-body
//price
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
               
                    <div className="row center">
                        {this.props.arr.map((prod)=>(
                            <div className="card" key={prod._id}>
                                <NavLink to={`/product/${prod._id}`} exact={true} strict>
                                    <img src={prod.image} className="medium" alt={prod.name}></img>
                                </NavLink>
                                <div className="card-body">
                                    <h2>{prod.name}</h2>
                                    <Rating rating={prod.rating} numReviews={prod.numReviews}></Rating>
                                    <div className="price">
                                        Price : ${prod.price}
                                    </div>
                                </div>
                            </div>
                        ))}         
                    </div>
               
            </React.Fragment>

        )
    };
};
export default Products;