import  Dashboard  from "./Dashboard";
import React from "react";

import {BrowserRouter,Route} from "react-router-dom";
import Login from "./Login";

class Main extends React.Component<{},{}>{
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <Route path="/" component={Login} exact={true} strict></Route>
                    <Route path="/dashboard" component={Dashboard} exact={true} strict></Route>
                </BrowserRouter>
            </React.Fragment>
        )
    }
};

export default Main;