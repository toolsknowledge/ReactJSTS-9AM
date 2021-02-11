import { FormControl,FormHelperText,InputLabel,MenuItem,Select as MuiSelect } from "@material-ui/core";
import React from "react";
interface IProps{
    name:string;
    value:string;
    label:string;
    onChange:any;
    error:any;
    options:any[];
};
interface IState{
};
export default class Select extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <FormControl {...(this.props.error && ({error:true}))}>
                    <InputLabel>{this.props.label}</InputLabel>
                    <MuiSelect variant="outlined" 
                              name={this.props.name}
                               value={this.props.value}
                               onChange={this.props.onChange}
                               label={this.props.label}>
                            <MenuItem value="">None</MenuItem>
                            {
                                this.props.options.map((obj:any)=>(
                                    <MenuItem key={obj.id} value={obj.id}>{obj.title}</MenuItem>
                                ))
                            }
                    </MuiSelect>
                    {this.props.error && <FormHelperText>{this.props.error}</FormHelperText>}
                </FormControl>
            </React.Fragment>
        )
    };
};