import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { connect } from "react-redux";

interface IProps{
   count:number;
}

interface IState{
    
}

class App extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        
    };
    render(){
      //const count = Number( window.localStorage.getItem("cartItems") );
      console.log( "Count",typeof this.props.count );
      return(
         <React.Fragment>
            <Router>

               <div className="grid-container">
                  
                  <header className="row">
                     <div>
                        <NavLink to="/" className="brand" exact={true} strict>AshokIT</NavLink>
                     </div>
                     <div>
                        <NavLink to="/cart" exact={true} strict>
                           cart
                           {this.props.count>0 ? (<span className="badge">{this.props.count}</span>) : (<span className="badge">0</span>) }

                        </NavLink>
                        <NavLink to="/signin" exact={true} strict>signin</NavLink>
                        <NavLink to="/product" exact={true} strict></NavLink>
                     </div>
                  </header>

                  <main>
                      <Route path="/" component={HomeScreen} exact={true} strict></Route>
                      <Route path="/product/:id" component={ProductScreen} exact={true} strict></Route>
                      <Route path="/cart/:id" component={CartScreen} exact={true} strict></Route>
                  </main>
                  
                  <footer className="row center">
                     copyright@ashokit.in
                  </footer>
               </div>
            </Router>
         </React.Fragment>
      )
    };
};


//subscription
const receive = (state:any)=>{
   return{
      count : state.cart.finalArray.length
   }
}


const send = (dispatch:any)=>{
   return{
      
   }
}

export default connect(receive,send)(App);

