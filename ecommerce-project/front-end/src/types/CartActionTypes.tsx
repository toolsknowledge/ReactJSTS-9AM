import Cart from "../modal/Cart";

export const ADD_ITEM:string = "ADD_ITEM";
export const REMOVE_ITEM:any = "REMOVE_ITEM";


interface CartAsync{
    selectedItem:Cart
    id:any;
};

interface CartAddItem extends CartAsync{
    type : typeof ADD_ITEM;
}

interface CartRemoveItem extends CartAsync{
    type : typeof REMOVE_ITEM;
}



export type CartActionTypes = CartAddItem | CartRemoveItem;













// import Cart from "../modal/Cart";

// export const ADD_ITEM:string = "ADD_ITEM";

// interface CartAsync{
//     cartInItems:Cart;
// };

// interface CartItemAdd extends CartAsync{
//     type : typeof ADD_ITEM;
// };

// export type CartActionTypes = CartItemAdd;

