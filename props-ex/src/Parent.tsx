import React from "react";
import Child from "./Child";

class Parent extends React.Component<{},{}>{
    render(){
        const arr:any[] = [{"p_id":111,"p_name":"p_one","p_cost":10000,"image":"https://allproductsc.s3.ap-south-1.amazonaws.com/AC/ac1.jpeg"},
                           {"p_id":222,"p_name":"p_two","p_cost":20000,"image":"https://allproductsc.s3.ap-south-1.amazonaws.com/AC/ac2.jpeg"},
                           {"p_id":333,"p_name":"p_three","p_cost":30000,"image":"https://allproductsc.s3.ap-south-1.amazonaws.com/AC/ac3.jpeg"},
                           {"p_id":444,"p_name":"p_four","p_cost":40000,"image":"https://allproductsc.s3.ap-south-1.amazonaws.com/AC/ac4.jpeg"},
                           {"p_id":555,"p_name":"p_five","p_cost":50000,"image":"https://allproductsc.s3.ap-south-1.amazonaws.com/AC/ac5.jpeg"}]; 
        return(
            <React.Fragment>
                <Child arr={arr}></Child>
            </React.Fragment>

        )
    }
};

export default Parent;