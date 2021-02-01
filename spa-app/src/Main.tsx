import React from "react";


//import BrowserRouter
//BrowserRouter is the predefined Component
//BrowserRouter used to hold the spa logic
//"as" is the keyword, used to assign the alias names

//import Route Component
//Route Component is the predefined Component
//Route component used to implement the Routing in SPA


//import NavLink Component
//NavLink Component used to create the Router Links in Single Page Applications

//1) react-router-dom           2) @types/react-router-dom
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";


class Main extends React.Component<{},{}>{
    constructor(props:{}){
        super(props);
    };

    render(){
        return(
            <React.Fragment>
                <Router>
                    <NavLink to="/"
                             activeStyle={{color:"slateblue"}}
                             style={{marginRight:100}}
                             exact={true} strict>
                        <b>Page_One</b>
                    </NavLink>

                    <NavLink to="/page_two"
                             activeStyle={{color:"slateblue"}}
                             style={{marginRight:100}}
                             exact={true} strict>
                        <b>Page_Two</b>
                    </NavLink>

                    <NavLink to="/page_three"
                             activeStyle={{color:"slateblue"}}
                             style={{marginRight:100}}
                             exact={true} strict>
                        <b>Page_Three</b>
                    </NavLink>

                    <br></br><br></br>
                    <Route path="/" component={Pageone} exact={true} strict></Route>
                    <Route path="/page_two" component={Pagetwo} exact={true} strict></Route>
                    <Route path="/page_three" component={Pagethree} exact={true} strict></Route>
                </Router>
            </React.Fragment>
        )
    }
};

export default Main;
