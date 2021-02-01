import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Childtwo from "./Childtwo";

interface IProps{}

interface IState{}

class Pagetwo extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <h1 style={{color:"peru"}}>Page Two !!!</h1>
                <BrowserRouter>
                    <NavLink to="/child_two" exact={true} strict activeStyle={{color:"palevioletred"}}><b>Child_Two</b></NavLink>
                    <br></br><br></br>
                    <Route path="/child_two" component={Childtwo} exact={true} strict></Route>
                </BrowserRouter>
            </React.Fragment>
        )
    }
};

export default Pagetwo;