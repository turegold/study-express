"use strict";
//모듈
const express = require('express')
const app = express();
const home = require("./routes/home")


//라우팅
app.use("/", home);

//앱 세팅(View)
app.set("views", "./views");
app.set("view engine", "ejs");



module.exports = app;
