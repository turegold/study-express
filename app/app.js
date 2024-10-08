//메인 파일

"use strict";
//모듈
const express = require('express');
const app = express();
const home = require("./src/routes/home");

//body-parser
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));
//정적 경로 지정
app.use(express.static(`${__dirname}/src/public`));
//라우팅
app.use("/", home);



//앱 세팅(View)
app.set("views", "./src/views");
app.set("view engine", "ejs");



module.exports = app;
