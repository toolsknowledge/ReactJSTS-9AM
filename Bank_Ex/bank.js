//import "createStore" function
//createStore function is the "predefined" function redux library
//createStore function used to create the "store" reference
const { createStore } = require("redux");

const initialState = {
    bal : 5000
};

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "WITHDRAW":
            return{
                bal : state.bal - action.value
            }
            break;
        case "DEPOSIT":
            return{
                bal : state.bal + action.value
            }
            break;
        default:
            return state;
    }
};


const store = createStore(reducer);


//subscribe
store.subscribe(()=>{
    console.log( store.getState() );
});


//dispatch
store.dispatch({type:"WITHDRAW",value:1000});
store.dispatch({type:"WITHDRAW",value:1000});
store.dispatch({type:"WITHDRAW",value:1000});
store.dispatch({type:"WITHDRAW",value:1000});
store.dispatch({type:"WITHDRAW",value:1000});
store.dispatch({type:"WITHDRAW",value:1000});
store.dispatch({type:"DEPOSIT",value:5000});
store.dispatch({type:"DEPOSIT",value:5000});
store.dispatch({type:"DEPOSIT",value:5000});
store.dispatch({type:"DEPOSIT",value:5000});
store.dispatch({type:"DEPOSIT",value:5000});