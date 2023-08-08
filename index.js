const express = require('express')
const app = express();
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const jobRoute = require("./routes/job");
const bookMarkRoute = require("./routes/bookmark");



const dotenv = require("dotenv");

dotenv.config();

// process.env.VARIABLE_NAME

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("db connected")).catch((err)=>{console.log(err)})

app.use(express.json());
app.use("/api/",authRoute);
app.use("/api/users",userRoute);
app.use("/api/job",jobRoute);
app.use("/api/bookmarks",bookMarkRoute);
// localhost:3000/api/register

app.get('/', (req, res) => res.send('Hello Sachi!'))
app.listen(process.env.PORT||5002,  console.log(`Example app listening on port!`))