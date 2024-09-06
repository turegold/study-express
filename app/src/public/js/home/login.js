//JS에 연결되어 있는 프론트 파일
"use strict";

const id = document.querySelector('#id'),
psword = document.querySelector('#psword'),
loginBtn = document.querySelector("button");

//클릭하면 login함수 실행
loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };
    
    //프론트에 Post요청
    //(클릭했을 때 id,psword를 body에 담아서 보냄)
    fetch("/login", {
        method: "POST", //Post요청
        headers: { //json형태
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req), //json으로 req를 보낸다.
    })
    //요청을 받으면 응답받은 데이터를 출력
    .then((res)=>{return res.json()})
    .then((res)=>{ console.log(res)});
    
}
