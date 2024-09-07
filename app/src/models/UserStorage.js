//user의 정보들이 담긴 파일(home.ctlr.js에서 불러서 사용)
"use strict";

class UserStorage{
    //정적변수(static)으로 설정해서 바로 Class에 접근할 수 있게 해줌
    //# -> 다른 파일에서 class에 접근 할 수 없게 은닉화
    static #users = {
        id: ["우리밋","나개발","김팅장"],
        psword:["1234","1234","123456"],
        name: ["우","나","김"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){//key값이 있냐?
                newUsers[field] = users[field];
                //console.log(newUsers);
            }
            return newUsers;
        }, {});
        return newUsers;
    };

    static getUserinfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id); //찾으려는 id의 index ex)우리밋->0
        const usersKeys = Object.keys(users); // [id, psword, name] (key값만)
        const userInfo = usersKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        //console.log(userInfo);
        return userInfo;
    }
}

module.exports = UserStorage;