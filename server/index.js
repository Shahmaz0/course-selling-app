const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {createLogger} = require("vite");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

//Connect to mongodb
//don't misuse this thank-you
mongoose.connect('mongodb+srv://Shahma:Shahma@cluster0.em6htsz.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3000, () => console.log('Server running on port 3000'))
