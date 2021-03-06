import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

interface IProps{}
interface IState{}
class App extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
      return(
         <React.Fragment>
            <Router>

               <div className="grid-container">
                  
                  <header className="row">
                     <div>
                        <NavLink to="/" className="brand" exact={true} strict>AshokIT</NavLink>
                     </div>
                     <div>
                        <NavLink to="/cart" exact={true} strict>cart</NavLink>
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
export default App;