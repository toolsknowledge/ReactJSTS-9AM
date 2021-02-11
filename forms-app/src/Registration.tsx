import React from "react";
import UseForm from "./controls/UseForm";
import Form from "./controls/Form";
import { Grid, Paper } from "@material-ui/core";
import Controls from "./controls/Controls";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme=>({
    "root":{
        width:"70%",
        padding:theme.spacing(1),
        margin:"0 auto"
    }
}))

export default function Registration(props:any):any{

    const items:any[] = [
        {id:"Male",title:"Male"},
        {id:"Female",title:"Female"}
    ];

    const options:any[] = [
        {id:"Engg",title:"Soft Engg"},
        {id:"Sr.Engg",title:"Sr.Soft Engg"},
        {id:"Architect",title:"Architect"},
        {id:"Manager",title:"Manager"},
        {id:"Tester",title:"Tester"}
    ];

    const classes = useStyles();

    const initialFormValues = {
        firstName:"",
        lastName:"",
        email:"",
        mobile:"",
        gender:"Male",
        departMentId:""
    };    
    const validate = (obj = values)=>{
        const temp = {...errors};
        if("firstName" in obj){
            temp.firstName = obj.firstName?"":"Can't Left First Name"
        }
        if("departMentId" in obj){
            temp.departMentId = obj.departMentId.length>0?"":"Select Department !!!"
        }
        if("lastName" in obj){
            temp.lastName = obj.lastName?"":"Can't Left LastName"
        }
        if("email" in obj){
            temp.email = (/$^|.+@.+..+/).test(obj.email)?"":"Plaese provide valid email"
        }
        if("mobile" in obj){
            temp.mobile = (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/).test(obj.mobile)?"":"Plaese provide valid mobile"
        }
        setErrors({
            ...temp
        });
    };

    const {
        values,
        setValues,
        errors,  
        setErrors,
        handleInputChange,
        resetForm      
    } = UseForm(initialFormValues,true,validate);

    const submitFn = (event:any)=>{
        event.preventDefault();
        console.log(values);
    };


    return(
        <React.Fragment>
            <Paper elevation={3} className={classes.root}>
                <Form>
                    <Grid container>
                        <Grid item xs={6}>
                            <Controls.Input name="firstName"
                                            value={values.firstName}
                                            label="First Name"
                                            onChange={handleInputChange}
                                            error={errors.firstName}/>
                             <Controls.Input name="email"
                                            value={values.email}
                                            label="Email"
                                            onChange={handleInputChange}
                                            error={errors.email}/>
                             <Controls.RadioGroup 
                                            name="gender"
                                            value={values.gender}
                                            onChange={handleInputChange}
                                            label="Gender"
                                            items={items}/>
                            <Controls.Select name="departMentId"
                                             value={values.departMentId}
                                             label="Department"
                                             error={values.error}
                                             options={options}
                                             onChange={handleInputChange}></Controls.Select>
                        </Grid>
                        <Grid item xs={6}>
                        <Controls.Input name="lastName"
                                        value={values.lastName}
                                        label="Last Name"
                                        onChange={handleInputChange}
                                        error={errors.lastName}/>
                        <Controls.Input name="mobile"
                                        value={values.mobile}
                                        label="Mobile"
                                        onChange={handleInputChange}
                                        error={errors.mobile}/>
                        <div>
                            <Controls.Button type="submit"
                                            text="Register" 
                                            onClick={submitFn}></Controls.Button>
                            <Controls.Button type="reset"
                                            text="Reset"
                                            onClick={resetForm}></Controls.Button>
                        </div>
                        
                        </Grid>
                    </Grid>
                </Form>
            </Paper>            
        </React.Fragment>
    )
};
