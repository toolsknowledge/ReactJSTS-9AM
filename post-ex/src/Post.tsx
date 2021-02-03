//React is the predefined class, used to create the Component.
//createRef is the predefined function in reacr library, used to create the "id's" to the DOM Element. 
import React,{ createRef } from "react";
import axios from "axios";



interface IState{
    message:string;
}

class Post extends React.Component<{},IState>{
    my_id = React.createRef<HTMLInputElement>();
    constructor(props:any){
        super(props);
        this.state = {
            message : ""
        }
    }
    my_fun = ()=>{
        axios.post(`http://test-routes.herokuapp.com/test/uppercase`,{"message":this.my_id.current?.value})
                    .then((posRes)=>{
                        const {data} = posRes;
                        this.setState({
                            message:data.message
                        })
                console.log(data);
        },(errRes)=>{
            console.log(errRes);
        });
    };
    render(){
        return(
            <React.Fragment>
                <input type="text" ref={this.my_id} placeholder="Enter Message"></input>
                <button onClick={this.my_fun}>Convert</button>
                <br></br><br></br>
                <h1>{this.state.message}</h1>
            </React.Fragment>
        )
    }
};
export default Post;