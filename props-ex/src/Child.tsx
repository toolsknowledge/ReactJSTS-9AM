import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow  } from "@material-ui/core";
import React from "react";
import Avatar from '@material-ui/core/Avatar';

interface IProps{
    arr:any[]
};


const styles = makeStyles({
    tables:{
        minWidth:650
    }
})


class Child extends React.Component<IProps,{}>{
    
    constructor(props:IProps){
        super(props);
    };
    render(){
        
        return(
            <React.Fragment>
                <Paper elevation={3} style={{minWidth:650}}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>SNO</TableCell>
                                    <TableCell>P_ID</TableCell>                                    
                                    <TableCell>P_NAME</TableCell>
                                    <TableCell>P_COST</TableCell>
                                    <TableCell>Image</TableCell>
                                </TableRow>    
                            </TableHead>  
                            <TableBody>
                                {this.props.arr.map((element:any,index:number)=>(
                                    <TableRow key={index}>
                                        <TableCell>{index+1}</TableCell>
                                        <TableCell>{element.p_id}</TableCell>
                                        <TableCell>{element.p_name}</TableCell>
                                        <TableCell>{element.p_cost}</TableCell>
                                        <TableCell>
                                            <Avatar alt={element.p_name} src={element.image}></Avatar>
                                        </TableCell>
                                    </TableRow>
                                ))}    
                            </TableBody>    
                        </Table>
                    </TableContainer>    
                </Paper>
            </React.Fragment>
        )
    }
};
export default Child;