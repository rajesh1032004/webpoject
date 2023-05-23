const express = require('express');
const app = express();

// app.get("/",(req,res)=> {
//     res.send({
//          id : 1,
//          name : "raj"
//     });
// });


app.get("/",(req,res)=> {
    res.json({
         id : 1,
         name : "raj"
    });
});

app.listen(3000,() =>{
    console.log("started 3000 port number :)");
});