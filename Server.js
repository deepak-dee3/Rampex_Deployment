
const express = require("express");
//const cors = require('cors');
const app = express();






app.get('/', (req,res) => {

    console.log("hi");
    //res.status(200).send("hii");
    //res.json({express:"learning express"})
   // res.send("hello");
//    res.json({
//     message1: "Hello",
//     message2: "World",
// });

   app.set("view engine", "ejs");


   res.render("index",{text:"kamal"});  //index.ejs file 





    //You should only send one response per request. 
    // If you want to send multiple pieces of data, 
    // combine them into a single response or log them to the console.
});

app.get('/user/new',(req,res)=>{

    res.send("user1 page");
});
 


const userRouter = require('./routes/user');

app.use('/users',userRouter)
//app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:5173',  // Frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }));




app.listen(3000);