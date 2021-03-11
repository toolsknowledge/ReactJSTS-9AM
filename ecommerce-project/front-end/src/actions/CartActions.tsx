import axios from "axios";
import { Dispatch } from "redux";
import { CartActionTypes, CART_LOADING, CART_SUCCESS, CART_FAIL } from "../types/CartActionTypes";
const getCartItems = (id:any,qty:number)=>{
    return async (dispatch:Dispatch<CartActionTypes>)=>{
        dispatch({
            type:CART_LOADING,
            cartInItems:{countInStock:0,
                         image:"",
                         price:0,
                         product:"",
                         qty:0,
                         name:""},
            error:"",
            loading:false
        });
        try{
            const {data} = await axios.get(`http://localhost:8080/api/products/${id}`);
            dispatch({
                type:CART_SUCCESS,
                cartInItems:{name:data.name,
                             qty,
                             product:data._id,
                             price:data.price,
                             image:data.image,
                             countInStock:data.countInStock},
                error:"",
                loading:true
            })
        }catch(err){
            dispatch({
                type:CART_FAIL,
                cartInItems:{
                        countInStock:0,
                        image:"",
                        price:0,
                        product:"",
                        qty:0,
                        name:""},
                error:err.message,
                loading:true
            })
        };
    };
};

export default getCartItems;