import React from "react";
import { match as Match} from "react-router-dom";
import getDetailProduct from "../actions/DetailsActions";
import { connect } from "react-redux";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
interface IProps{
    match : Match<routeParams>;
    get_product:any;
    productDetails:any;
}
interface IState{}
interface routeParams{
    id:any;
};
class ProductScreen extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    componentDidMount(){
         this.props.get_product( this.props.match.params.id );
    };
    render(){
        const { loading,error,product } = this.props.productDetails;
        return(
            <React.Fragment>

                { !loading ? (<LoadingBox />) : error === "Network Error"? 
                  (<MessageBox variant="warning">{error}</MessageBox>) : JSON.stringify( this.props.productDetails ) }


            </React.Fragment>
        )
    }
};

//subscription
const receive = (state:any)=>{
    return{
        productDetails : state.details
    }
};

//dispatch
const send = (dispatch:any)=>{
    return{
        get_product : (id:any)=>{ dispatch( getDetailProduct(id) ) }
    }
};


export default connect(receive,send)(ProductScreen);