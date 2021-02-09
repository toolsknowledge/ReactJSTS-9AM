import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
const useStyles = makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            width:"80%",
            margin:theme.spacing(1)
        }    
    }
}));
export default function Form(props:any){
    const classes = useStyles();
    return(
        <React.Fragment>
             <Paper elevation={3}>
                 <form className={classes.root} autoComplete="off" {...props.others}>
                     {props.children}
                 </form>
             </Paper>
        </React.Fragment>
    )
};