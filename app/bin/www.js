//서버를 가동하는 파일

"use strict"
const app = require("../app");
const port = 3000;
app.listen(port, ()=>{
    console.log(`${port}번 포트로 서버 가동`);
});