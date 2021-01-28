import React from "react";

//define state
interface MyState{
    "empID":number;
    "empName":string;
    "empSal":number;
    "empHobbies":string[];
    "allEmployees":any[],
    "conclusion":any
};

// interface IProps{}

class State1 extends React.Component<{},MyState>{
    constructor(props:{}){
        super(props);
        this.state = {
            "empID" : 111,
            "empName" : "E_ONE",
            "empSal" : 10000,
            "empHobbies" : [`Playing`,`Movies`,`Riding`],
            "allEmployees" : [{"e_id":111,"e_name":"e_one","e_sal":10000},
                              {"e_id":222,"e_name":"e_two","e_sal":20000},
                              {"e_id":333,"e_name":"e_three","e_sal":30000},
                              {"e_id":444,"e_name":"e_four","e_sal":40000},
                              {"e_id":555,"e_name":"e_five","e_sal":50000}],
            "conclusion":"End of State"
        };
    };
    render(){
        return(
            <React.Fragment>
                Employee ID : {this.state.empID}
                <br></br><br></br>
                Employee Name : {this.state.empName}
                <br></br><br></br>
                Employee Sal : {this.state.empSal}
                <br></br><br></br>
                {this.state.empHobbies.map((arg1:string,i:number)=>(
                    <h5 key={i}>{arg1}</h5>
                ))}
                <br></br>
                <table>
                    <tr>
                        <th>e_id</th>
                        <th>e_name</th>
                        <th>e_sal</th>
                    </tr>
                    {this.state.allEmployees.map((element:any,index:number)=>(
                        <tr key={index}>
                            <td>{element.e_id}</td>
                            <td>{element.e_name}</td>
                            <td>{element.e_sal}</td>
                        </tr>
                    ))}

                    <br></br><br></br>
                    <h2>{this.state.conclusion}</h2>
                </table>
            </React.Fragment>
        )
    };
};

export default State1;