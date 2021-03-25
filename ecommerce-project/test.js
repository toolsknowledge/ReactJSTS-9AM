let gautav_cart = [
    "Shirt",
    "Pant",
    "TShirt"
];


function my_fun(item){
    let duplicate = gautav_cart.find( x => x === item );
    if(duplicate){
        return gautav_cart;
    }else{
        return [...gautav_cart,item];
    }
};

console.log( my_fun("Shoes") );


