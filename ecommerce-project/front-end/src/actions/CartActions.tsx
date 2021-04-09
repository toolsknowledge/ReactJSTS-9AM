import axios from "axios";
import { Dispatch } from "redux";
import { ADD_ITEM, CartActionTypes } from "../types/CartActionTypes";

const cartItems = (id:any,qty:number)=>{
    return async (dispatch:Dispatch<CartActionTypes>, getState:()=>any)=>{
        try{
            const response = await axios.get(`http://localhost:8080/api/products/${id}`);
            const { data } = response;
            data["qty"] = qty;
            dispatch({
                type:ADD_ITEM,
                selectedItem:data
            })
            let arr = getState().cart.finalArray;
            let str_arr = JSON.stringify(arr);
            window.localStorage.setItem("cart",str_arr);
        }catch(err){
            dispatch({
                type:ADD_ITEM,
                selectedItem:{ 
                    "_id":"",
                    "name":"",
                    "category":"",
                    "image":"",
                    "price":0,
                    "brand":"",
                    "rating":0,
                    "numReviews":0,
                    "description":"",
                    "countInStock":0
                }
            })
        }
    }
};
export default cartItems;