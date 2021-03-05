import React from "react";
import { match as Match} from "react-router-dom";
import getDetailProduct from "../actions/DetailsActions";
import { connect } from "react-redux";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

import { NavLink } from "react-router-dom";
import Rating from "../components/Rating";

import { History, LocationState } from "history";


interface IProps{
    match : Match<routeParams>;
    get_product:any;
    productDetails:any;
    history:History<LocationState>;
}
interface IState{
    qty:number;
}
interface routeParams{
    id:any;
};
class ProductScreen extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            qty : 1
        }
    }
    componentDidMount(){
         this.props.get_product( this.props.match.params.id );
    };

    setQty = (value:any)=>{
        this.setState({
            qty : value
        })
    }

    addToCart = ()=>{
        //move to the cart screen
        console.log( "move to the cart screen with qty and productid" );
        this.props.history.push("/cart")
    };

    render(){
        const { loading,error,product } = this.props.productDetails;
        return(
            <React.Fragment>
                {!loading ? (<LoadingBox></LoadingBox>) : 
                  error === "Network Error"? (<MessageBox variant="danger">{error}</MessageBox>) : (
                    <div>
                    <NavLink to="/" exact={true} strict><p className="back_screen">back to results</p></NavLink>
                    <div className="row top">
                        <div className="col-2">
                            <img src={product.image} alt={product.name}></img>
                        </div>
                        {/* description */}
                        <div className="col-1">
                            <ul>
                                <li><h2>{product.name}</h2></li>
                                <li>
                                    <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                                </li>
                                <li>
                                    $ {product.price}
                                </li>
                                <li>
                                    {product.description}
                                </li>
                            </ul>
                        </div>
                            {/*cart functionality */}
                            <div className="col-1">
                                <div className="card card-body">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div>Price</div>
                                                <div>${product.price}</div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="row">
                                                <div>Availability</div>
                                                <div>
                                                    {product.countInStock>0?(<span className="success">Stock Available</span>)
                                                                :(<span className="error">Out of Stock</span>)}
                                                </div>
                                            </div>
                                        </li>

                                        {/* bind th countInStock value to */}
                                        {product.countInStock>0 && (
                                            <>
                                              <li>
                                                  <div className="row">
                                                      <div>Qty</div>
                                                      <div>
                                                        <select value={this.state.qty}
                                                                onChange={(e:any)=>this.setQty(e.target.value)}>
                                                            
                                                            {
                                                                [...Array(product.countInStock).keys()].map((x:any)=>(
                                                                    <option key={x+1} value={x+1}>{x+1}</option>
                                                                ))
                                                            }
                                                        </select>
                                                      </div>
                                                  </div>
                                              </li>
                                              <li>
                                                <button onClick={this.addToCart} className="primary block">Add to Cart</button>
                                              </li>
                                            </>
                                        )}

                                    </ul>
                                </div>
                            </div>
                        </div>



                    </div>
                  )}

                
            </React.Fragment>
        )
    }
};

//subscription
const receive = (state:any)=>{
    return{
        productDetails : state.details
    }
};

//dispatch
const send = (dispatch:any)=>{
    return{
        get_product : (id:any)=>{ dispatch( getDetailProduct(id) ) }
    }
};


export default connect(receive,send)(ProductScreen);