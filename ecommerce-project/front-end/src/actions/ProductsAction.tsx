//import axios module
//axios module used to connect to server
import axios from "axios";
import { Dispatch } from "redux";
import { ProductsActionTypes, PRODUCTS_FAIL, PRODUCTS_LOADING, PRODUCTS_SUCCESS } from "../types/ProductActionTypes";
//define function (user defined function)
//used to connect to "server"
//fetch the data from "server"
//and handover "response" to "reducer"
const getProducts = ()=>{
    return async (dispatch:Dispatch<ProductsActionTypes>)=>{
        dispatch({
            type : PRODUCTS_LOADING,
            products:[],
            error : "",
            loading : false
        });
        try{
            const res = await axios.get(`http://localhost:8080/api/products`);
            const { data } = res;
            dispatch({
                type : PRODUCTS_SUCCESS,
                products : data,
                error : "",
                loading : true
            })
        }catch(err){
            dispatch({
                type : PRODUCTS_FAIL,
                products:[],
                error : err.message,
                loading : true
            })
        }
    };
};
export default getProducts;