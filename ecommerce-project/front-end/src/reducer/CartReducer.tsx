import Cart from "../modal/Cart";
import { ADD_ITEM } from "../types/CartActionTypes";
interface CartState{
    finalArray:Cart[]
}

const initialState:CartState = {
    finalArray:window.localStorage.getItem("cart")? JSON.parse(window.localStorage.getItem("cart") || '{}'):[]
}
const cartReducer = (state=initialState,action:any):CartState=>{
    switch(action.type){
        case "ADD_ITEM":
            const item = action.selectedItem;
            const existedItem = state.finalArray.find((obj)=>{ return obj._id === item._id });
            if(existedItem){
                return{
                    ...state,
                    finalArray : state.finalArray.map((element)=>{ return element._id === item._id ? item : element})
                }
            }else{
                return{
                    ...state,
                    finalArray: [...state.finalArray,item]
                }
            }
        default:
            return state;
    }
}

export default cartReducer;


























// //CartReducer
// //identify duplicate item
// //if item is duplicate, update old item with latest item otherwise add the item to the cart
// interface IState{
//     cartInItems : any[]
// };

// const initialState:IState = {
//     cartInItems : []
// };

// const cartReducer = (state=initialState,action:any):IState=>{
//     switch(action.type){
//         case "ADD_ITEM":
//             let newItem = action.cartInItems;
//             let existedItem = state.cartInItems.find((obj)=>{
//                 return obj._id === newItem._id;
//             });
//             if(existedItem){
//                 return{
//                     ...state,
//                     cartInItems : state.cartInItems.map((obj)=>{ return obj._id === newItem._id ? newItem : obj })
//                 }
//             }else{
//                 return{
//                     ...state,
//                     cartInItems:[...state.cartInItems, newItem ]
//                 }
//             }
            
//         default:
//             return state;
//     };
// };

// export default cartReducer;
