const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("home page");
});

app.get("/about",(req,res)=>{
    res.send("about page");
});


app.get("/contact",(req,res)=>{
    res.send("contact page");
});


app.get("/etc",(req,res)=>{
    res.send("etc page");
});

app.listen(2000,() => {
    console.log("started 2000");
});
