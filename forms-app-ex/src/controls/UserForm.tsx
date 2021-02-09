//UserForm
//Validations
//Utility
import React,{useState} from "react";
//useState is the life cycle hook, used to create the state in functional level component
export default function UserForm(formValues:any,flag=false,validate:any):any{
    const [values,setValues] = useState(formValues);
    const [errors,setErrors] = useState({});

    const handleChangeInput = (event:any)=>{
        const {name,value} = event.target;
        setValues({
            ...values,
            [name]:value
        });
        if(flag){
            validate({[name]:value})
        }
    };

    const resetForm = ()=>{
        setValues(formValues);
        setErrors({});
    };

    return{
        values,
        setValues,
        errors,
        setErrors,
        handleChangeInput,
        resetForm
    }  

};