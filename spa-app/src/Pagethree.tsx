import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Childthree from "./Childthree";

interface IProps{}

interface IState{}

class Pagethree extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    
    render(){
        return(
            <React.Fragment>
                <h1 style={{color:"peru"}}>Page Three !!!</h1>
                <BrowserRouter>
                    <NavLink to="/child_three" exact={true} strict activeStyle={{color:"palevioletred"}}><b>Child_Three</b></NavLink>
                    <br></br><br></br>
                    <Route path="/child_three" component={Childthree} exact={true} strict></Route>
                </BrowserRouter>
            </React.Fragment>
        )
    }
};

export default Pagethree;