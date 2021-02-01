import React from "react";
import Laptops from "./Laptops";
import Mobiles from "./Mobiles";
import Jeans from "./Jeans";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";

class Dashboard extends React.Component<{},{}>{
    render(){
        return(
            <React.Fragment>
                <Router>
                     <NavLink to="/laptops" exact={true} strict activeStyle={{color:"rosybrown"}} style={{marginRight:100}}>
                         <Typography variant="h6" color="secondary">Laptops</Typography>
                     </NavLink>
                     <NavLink to="/mobiles" exact={true} strict activeStyle={{color:"rosybrown"}} style={{marginRight:100}}>
                         <Typography variant="h6" color="secondary">Mobiles</Typography>
                     </NavLink>
                     <NavLink to="/jeans" exact={true} strict activeStyle={{color:"rosybrown"}}>
                         <Typography variant="h6" color="secondary">Jeans</Typography>
                     </NavLink>
                     <br></br><br></br>
                     <Route path="/laptops" component={Laptops} exact={true} strict></Route>
                     <Route path="/mobiles" component={Mobiles} exact={true} strict></Route>
                     <Route path="/jeans" component={Jeans} exact={true} strict></Route>
                </Router>
            </React.Fragment>
        )
    }
};

export default Dashboard;