import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Childone from "./Childone";

interface IState{}

interface IProps{}

class Pageone extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>

                    <h1 style={{color:"peru"}}>Page One !!!</h1>
                   <NavLink to="/child_one" 
                            activeStyle={{color:"red"}}
                            exact={true} strict>
                        <b>Child_One</b>
                    </NavLink>  

                    <br></br><br></br>
                    <Route path="/child_one" component={Childone} exact={true} strict></Route>         
                </BrowserRouter>
            </React.Fragment>
        )
    }
};

export default Pageone;