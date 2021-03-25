import Cart from "../modal/Cart";

export const ADD_ITEM:string = "ADD_ITEM";

interface CartAsync{
    cartInItems:Cart;
};

interface CartItemAdd extends CartAsync{
    type : typeof ADD_ITEM;
};

export type CartActionTypes = CartItemAdd;

