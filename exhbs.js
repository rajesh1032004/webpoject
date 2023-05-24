const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 9000;


app.set("view engine","hbs");



// const staticpath = path.join(__dirname, "public");

// app.use(express.static(staticpath));
//changing the views folders name...
const temp = path.join(__dirname , "temp/views");
const part = path.join(__dirname , "temp/header");
app.set('views',temp);

hbs.registerPartials(part);

app.get("", (req ,res) => {
    res.render("hi.hbs");
});

app.listen(port, () => {
    console.log("all the best");
});