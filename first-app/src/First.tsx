//import React class
//React is the predefined class
//React class used to create the Component
import React from "react";


//define state
//component will contain state
//component data also called as state
//in general we will define state by using interfaces
interface IState{

};


//define props
//component may receive data from other component
//component will receive data from other components by using props
//in general we will define props by using interfaces
interface IProps{

};


//create the component
class First extends React.Component<IProps,IState>{
     render(){
        return(
            <h1>Welcome to ReactJS With TypeScript !!!</h1>
        )
     };
};

//export the component
export default First;
