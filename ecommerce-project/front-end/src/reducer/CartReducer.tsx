import { CartActionTypes, CART_FAIL, CART_LOADING, CART_SUCCESS } from "../types/CartActionTypes";

export interface initialStateI{
    loading:boolean;
    cartItems:any[];
    error:string;
};

const initialState:initialStateI = {
    loading : false,
    cartItems : [],
    error : ""
};

const cartReducer = (state=initialState,action:CartActionTypes):initialStateI=>{
    switch(action.type){
        case CART_SUCCESS:
            let item = action.cartInItems;
            let existedItem = state.cartItems.find((x)=> x.product === item.product );
            if(existedItem){
                return{
                    ...state,
                    cartItems : state.cartItems.map((x)=> x.product === existedItem.product ? item : x),
                    error : action.error,
                    loading : action.loading 
                }
            }else{
                return{
                    ...state,
                    cartItems : [...state.cartItems, item],
                    error : action.error,
                    loading : action.loading
                }  
            }
            break;
        default:
            return state;
    };
};

export default cartReducer;