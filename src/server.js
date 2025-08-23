const express = require("express");
const app = express();
const port = 4000;


//basic route setup
app.get("/" , (req ,res) => {
    res.send("hello from express.js");
});

//strat server
app.listen(port , () => {
       console.log("server is running properly")
});
