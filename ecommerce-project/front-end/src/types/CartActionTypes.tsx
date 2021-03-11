import { Cart } from "../modal/Cart";

export const CART_LOADING:string = "CART_LOADING";
export const CART_SUCCESS:string = "CART_SUCCESS";
export const CART_FAIL:string = "CART_FAIL";

interface CartAsync{
    loading:boolean;
    cartInItems : Cart;
    error : string;
};

interface CartLoading extends CartAsync{
    type : typeof CART_LOADING;
};

interface CartSuccess extends CartAsync{
    type : typeof CART_SUCCESS;
};

interface CartFail extends CartAsync{
    type : typeof CART_FAIL;
};

export type CartActionTypes = CartLoading | CartSuccess |  CartFail;