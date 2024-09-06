//JS 함수들을 모아두는 파일(index.js에서 사용)
"use strict";

const users = {
    id: ["우리밋","나개발","김팅장"],
    psword:["1234","1234","123456"],
};

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

        //user id가 존재하고 비밀번호가 맞는지 확인
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                //맞을 경우 success: true가 담긴json으로 응답
                return res.json({
                    success: true,
                });
            }
        }
        //아닐 경우 success: false인 json으로 응답
        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    },
};



module.exports = {
    output,
    process,

};
