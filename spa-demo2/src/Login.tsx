import { Button, TextField } from "@material-ui/core";
import React from "react";
import { History, LocationState } from "history";

interface IProps{

    history:History<LocationState>;
};

interface IState{
    "uname":string;
    "upwd":string;
}

class Login extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            uname : "",
            upwd : ""
        };
    };

    handleChange = (event:any)=>{
        const {name,value} = event.target;
        console.log(name);
        console.log(value);
        switch(name){
            case "uname":
                this.setState({
                    uname : value
                })
                break;
            case "upwd":
                this.setState({
                    upwd : value
                })
                break;
        }

    };

    login = ()=>{
        
        if(this.state.uname === "ashokit" && this.state.upwd === "ashokit"){
            this.props.history.push("/dashboard");
        }else{
            alert("Login Fail");
        }
        

    };

    render(){
        return(
            <React.Fragment>
                 <TextField variant="outlined" 
                            label="User Name" 
                            name="uname" 
                            value={this.state.uname} 
                            onChange={this.handleChange}>
                 </TextField>

                 <br></br><br></br>
                 <TextField variant="outlined" 
                            label="Password" 
                            name="upwd" 
                            value={this.state.upwd} 
                            onChange={this.handleChange}>
                 </TextField>

                 <br></br><br></br>
                 <Button variant="contained" color="primary" onClick={this.login}> Login </Button>
            </React.Fragment>
        )
    }

};

export default Login;
