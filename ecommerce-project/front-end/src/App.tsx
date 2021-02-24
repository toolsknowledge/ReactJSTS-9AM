import React from "react";
interface IProps{}
interface IState{}
class App extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
      return(
         <React.Fragment>
            <div className="grid-container">
               
               <header className="row">
                  <div>
                     <a href="#" className="brand">AshokIT</a>
                  </div>
                  <div>
                     <a href="#">cart</a>
                     <a href="#">signin</a>
                  </div>
               </header>

               <main>
                 content soon.....!
               </main>
               
               <footer className="row center">
                  copyright@ashokit.in
               </footer>
            </div>
         </React.Fragment>
      )
    };
};
export default App;