import axios from "axios";
import { Dispatch } from "redux";
import { DetailsProductType,DETAILS_PRODUCT, DETAILS_PRODUCT_FAIL, DETAILS_PRODUCT_SUCCESS } from "../types/DetalsActionTypes";
const getDetailProduct = (id:any)=>{
    return async (dispatch:Dispatch<DetailsProductType>)=>{
        dispatch({type:DETAILS_PRODUCT,
                 loading:false,
                 product:{"_id":"",
                 "name":"",
                 "category":"",
                 "image":"",
                 "price":0,
                 "brand":"",
                 "rating":0,
                 "numReviews":0,
                 "description":"",
                 "countInStock":0},
                 error:""})
        try{
            const res = await axios.get(`http://localhost:8080/api/products/${id}`);
            const { data } = res;
            dispatch({
                type:DETAILS_PRODUCT_SUCCESS,
                product:data,
                error:"",
                loading:true
            })
        }catch(err){
            dispatch({type:DETAILS_PRODUCT_FAIL,
                loading:true,
                product:{"_id":"",
                "name":"",
                "category":"",
                "image":"",
                "price":0,
                "brand":"",
                "rating":0,
                "numReviews":0,
                "description":"",
                "countInStock":0},
                error:err.message})
        };
    }
};

export default getDetailProduct;