
const express = require("express");
const app = express();

//load config from env file...........
require("dotenv").config();
const PORT = process.env.PORT || 4000;


//middleware to parse json request body.....................
app.use(express.json());


//import routes for todo api...............
const todoRoutes = require("./Routes/Todos");



//mount the todo Api routes...................................
app.use("/api/v1", todoRoutes);


//start server...................................
app.listen(3000, ()=> {
    console.log("app is running succesfully");
})


//connect to the database...........................
const bdconnect = require("./Config/database");
const dbconnect = require("./Config/database");
dbconnect();

//default routes....................
app.get("/", (res, req) => {
    res.setEncoding('<h1>this is homePAge baby</h1>');
})