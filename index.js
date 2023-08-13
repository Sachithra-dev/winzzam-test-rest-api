const express = require('express')
const app = express();
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const monthRoute = require("./routes/month");




const dotenv = require("dotenv");

dotenv.config();

// process.env.VARIABLE_NAME

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("db connected")).catch((err)=>{console.log(err)})

app.use(express.json());
app.use("/api/",authRoute);
app.use("/api/users",userRoute);
app.use("/api/month",monthRoute);



app.get('/', (req, res) => res.send(`Hello  ${process.env.MONGO_URL} `))
app.listen(process.env.PORT||5002,  console.log(`Example app listening on port!`))


//Paths
//1)Register - /api/register
//2)Login - /api/login
//3)Profile_completion - /api/users/ --- (put)
//4)Profile_updation - /api/users/
//5)