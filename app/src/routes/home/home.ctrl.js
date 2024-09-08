//JS 함수들을 모아두는 파일(index.js에서 사용)
"use strict";

const UserStorage = require("../../models/UserStorage");

const output={
    hello: (req,res)=>{
        res.render("home/index");
    },
    
    login: (req,res)=>{
        res.render("home/login");
    },
};

const process={
    login: (req,res)=>{
        const id = req.body.id,
        psword = req.body.psword;

        const users = UserStorage.getUsers("id","psword","name");
        const response = {};
        //user id가 존재하고 비밀번호가 맞는지 확인
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                //맞을 경우 success: true가 담긴json으로 응답
                response.success = true;
                return res.json(response);
            }
        }
        //아닐 경우 success: false인 json으로 응답
        response.success = false;
        response.msg = "로그인에 실패하였습니다.";
        return res.json(response);
    },
};



module.exports = {
    output,
    process,

};
