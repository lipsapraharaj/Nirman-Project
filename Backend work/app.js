const express=require("express");
const { default: mongoose } = require("mongoose");
const dotenv=require('dotenv');
const app=express();  

mongoose.set('strictQuery', false);

//============config datas===============
dotenv.config({path:'./config.env'});
const port=process.env.PORT;

//=============Connection=================
require('./db/connection');
app.use(express.json());


// ============middleware================
// const middleware=(req,res,next)=>{
//     console.log("Middleware working");
//     next();
// }

// ==============routing===============
app.use(require('./router/auth'));


// ==================================
// app.get('/',(req,res)=>{
//     res.send("Hello from HOME page");
// });

app.get('/about',(req,res)=>{
    res.send("Hello from ABOUT page");
});

app.get('/map',(req,res)=>{
    res.send("Hello from MAP page");
});

app.get('/login',(req,res)=>{
    res.send("Hello from LOGIN page");
});

app.listen(port,()=>{
    console.log(`App running at port ${port}`);
})