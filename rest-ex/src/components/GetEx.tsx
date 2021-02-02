import React from "react";
import axios from "axios";
import { Country } from "../modal/Countries";

interface IState{
    countries:Country[]
};

interface IProps{
};

class GetEx extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            countries : []
        };
    };
    //get requests
    componentDidMount(){
        axios.get(`https://restcountries.eu/rest/v2/all`).then((posRes)=>{
            const {data} = posRes;
            this.setState({
                countries:data
            })
        },(errRes)=>{
            console.log(errRes);
        });
    };
    render(){
        return(
            <React.Fragment>
                <table>
                    <tr>
                        <th>name</th>
                        <th>capital</th>
                        <th>region</th>
                        <th>population</th>
                        <th>nativeName</th>
                        <th>currencies</th>
                        <th>flag</th>
                    </tr>
                    {this.state.countries.map((element:Country,index:number)=>(
                        <tr>
                            <td>{element.name}</td>
                            <td>{element.capital}</td>
                            <td>{element.region}</td>
                            <td>{element.population}</td>
                            <td>{element.nativeName}</td>
                            <td>{element.currencies[0].symbol}</td>
                            <td><img width="100px" height="50px" src={element.flag}></img></td>
                        </tr>
                    ))}
                </table>
            </React.Fragment>
        )
    };
};

export default GetEx;