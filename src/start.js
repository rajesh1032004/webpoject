const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("hey");
});

app.listen(1000,() => {
    console.log("started");
});

