const mongoose=require('mongoose');

//=============To get DB from config=================
const DB=process.env.DATABASE;

//=============Connection=================
mongoose.connect(DB).then(()=>{
    console.log("connection sucessfull");
}).catch((err)=>{
    console.log(err);
});