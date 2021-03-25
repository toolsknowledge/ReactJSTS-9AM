import React from "react";
import getProducts from "../actions/ProductsAction";
import { connect } from "react-redux";
import Products from "../components/Products";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

interface IProps{
    products : any;
    getAllProducts : any;
};
interface IState{}
class HomeScreen extends React.Component<IProps,IState>{
        constructor(props:IProps){
            super(props);
        };
       
        componentDidMount(){
            this.props.getAllProducts();
        };

        render(){
            const {loading,products,error} = this.props.products;
            return(
                <React.Fragment>
                    
                    {
                        !loading ? (<LoadingBox></LoadingBox>) :
                        error === "Network Error"?(<MessageBox variant="danger">{error}</MessageBox>) :
                        (<Products arr={products}/>)
                    }
                </React.Fragment>
            )
        };

};

//subscription
const receive = (state:any)=>{
    return{
        products : state.products
    }
};

//dispatch
const send = (dispatch:any)=>{
    return{
        getAllProducts : ()=>{ dispatch( getProducts() ) }
    }
};

//link subscription and dispatch to HomeScreen
export default connect(receive,send)(HomeScreen);





