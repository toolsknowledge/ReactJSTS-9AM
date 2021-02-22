import Product from "../modal/Product";
export const DETAILS_PRODUCT:string = "DETAILS_PRODUCT";
export const DETAILS_PRODUCT_SUCCESS:string = "DETAILS_PRODUCT_SUCCESS";
export const DETAILS_PRODUCT_FAIL:string = "DETAILS_PRODUCT_FAIL";

interface DetailsProductAsync{
    loading : boolean;
    product:Product;
    error : string;
};

interface DetailsProduct extends DetailsProductAsync{
        type : typeof DETAILS_PRODUCT;
};

interface DetailsProductSuccess extends DetailsProductAsync{
        type : typeof DETAILS_PRODUCT_SUCCESS;
};

interface DetailsProductFail extends DetailsProductAsync{
        type : typeof DETAILS_PRODUCT_FAIL;
};

export type DetailsProductType = DetailsProduct | DetailsProductSuccess | DetailsProductFail;