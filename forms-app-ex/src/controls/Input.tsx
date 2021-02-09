//import React class
//React class, used to create the Component
import { TextField } from "@material-ui/core";
import React from "react";


//this component receives following data dynamically
//@name
//@label
//@value
//@onChange
//@error

//functional level component
export default function Input(props:any){
    const {name,label,value,onChange,error=null} = props;

    return(
        <React.Fragment>
            <TextField variant="outlined"
                       name={name}
                       label={label}
                       value={value}
                       onChange={onChange}
                       {...(error && {error:true,helperText:error})}/>
        </React.Fragment>
    )
};



