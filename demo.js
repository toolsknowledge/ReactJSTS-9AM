let obj1 = {key1:"Hello_1"};
let obj2 = {...obj1};

obj1.key2 = "Hello_2";

console.log(obj1);
console.log(obj2);