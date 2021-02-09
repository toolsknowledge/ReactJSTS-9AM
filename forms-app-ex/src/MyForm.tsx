import React from "react";
import UserForm from "./controls/UserForm";
import Form from "./controls/Form";
import { Grid } from "@material-ui/core";
import  Controls from "./controls/Controls"; 

const initialValues = {
    firstName:""
};

export default function MyForm(props:any):any{

    const validate = (obj = values)=>{
        const temp = {...errors};
        if("firstName" in obj){
            temp.firstName = obj.firstName?"":"can't leave blank"
        }
        setErrors({
            ...temp
        })
    };
    
    
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleChangeInput,
        resetForm
    } = UserForm(initialValues,true,validate);

    return(
        <React.Fragment>
            <Form>
                <Grid container>
                    <Grid item xs={6}>
                        <Controls.Input 
                                name="firstName" 
                                label="First Name"
                                value={values.firstName}
                                onChange={handleChangeInput}
                                error={errors.firstName}/>
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
            </Form>
        </React.Fragment>
    )

    

};