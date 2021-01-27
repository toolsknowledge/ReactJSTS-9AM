import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

interface IState{};

interface IProps{};

class Main extends React.Component<IProps,IState>{
    render(){
        return(
            <React.Fragment>
                <Header />
                <Body />
                <Footer />
            </React.Fragment>
        )
    };
};

export default Main;