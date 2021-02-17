//import modules
//require() function used to import the modules
const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const bodyparser = require("body-parser");


//create the rest object
const app = express();
//where "app" is the rest object
//where "app" object used to develop the GET,POST,PUT,DELETE,........



//enable the cors policy
app.use(cors());


//MIME Type   (JSON)
app.use(bodyparser.json());



//read the data coming from client
app.use(bodyparser.urlencoded({extended:false}));


//to connect to mongodb database, create the client reference
let ashokIT = mongodb.MongoClient;


//create the rest api
app.get("/api/products",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ecommerce9am?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ecommerce9am");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});


//assign the port no
let port = process.env.PORT || 8080; 
app.listen(port,()=>{
    console.log("Server Started !!!"); 
});


