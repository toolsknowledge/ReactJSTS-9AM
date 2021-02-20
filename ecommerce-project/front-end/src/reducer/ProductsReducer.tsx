//it will receive response from actions
import Product from "../modal/Product";
import { ProductsActionTypes, PRODUCTS_FAIL, PRODUCTS_LOADING, PRODUCTS_SUCCESS } from "../types/ProductActionTypes";
interface initialStateI{
    loading:boolean;
    products:Product[];
    error:string;
};
const initialState:initialStateI = {
    loading : false,
    products:[],
    error:""
};
const productsReducer = (state=initialState,action:ProductsActionTypes):initialStateI=>{
    switch(action.type){
        case PRODUCTS_LOADING:
        case PRODUCTS_SUCCESS:
        case PRODUCTS_FAIL:
            return{
                ...state,
                loading:action.loading,
                products:action.products,
                error:action.error
            }
        default:
            return state;
    }
};

export default productsReducer;