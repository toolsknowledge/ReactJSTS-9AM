import axios from "axios";
import { Dispatch } from "redux";
import { CartActionTypes, ADD_ITEM } from "../types/CartActionTypes";

const cartItems = (id:any,qty:number)=>{
    return async (dispatch:Dispatch<CartActionTypes>,getState : ()=> any)=>{
        
        try{
            const res = await axios.get(`http://localhost:8080/api/products/${id}`);
            const { data } = res;
            dispatch({
                type:ADD_ITEM,
                cartInItems:{_id:data._id,
                             name:data.name,
                             price:data.price,
                             image:data.image,
                             counnInStock:data.countInStock,
                             qty}
            })
            
          
            window.localStorage.setItem( "cartItems", JSON.stringify(getState().cart.cartInItems.length) );
           
        }catch(err){
           console.log( err );
        }
    };
};

export default cartItems;