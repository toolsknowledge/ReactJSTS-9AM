import Product from "../modal/Product";
import { DetailsProductType, DETAILS_PRODUCT, DETAILS_PRODUCT_FAIL, DETAILS_PRODUCT_SUCCESS } from "../types/DetalsActionTypes";

interface initialStateI{
    loading : boolean;
    product:Product;
    error : string;
};
const initialState:initialStateI = {
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
            "countInStock":0,
            },
    error:""
}
const detailsReducer = (state=initialState,action:DetailsProductType):initialStateI=>{
    switch(action.type){
        case DETAILS_PRODUCT:
        case DETAILS_PRODUCT_SUCCESS:
        case DETAILS_PRODUCT_FAIL:
            return{
                ...state,
                error:action.error,
                product:action.product,
                loading:action.loading
            }
        default:
            return state;
    }
};
export default detailsReducer;