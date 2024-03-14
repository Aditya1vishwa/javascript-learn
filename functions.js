// function sayMyName(){
//     console.log("a");
//     console.log("d");
//     console.log("i");
//     console.log("t");
//     console.log("y");
//     console.log("a");
// }
// sayMyName
// //it is a reference of a funtion

const { copyFileSync } = require("fs");


// sayMyName();


// function loginUserMessage(username){

//         return `${username} just logged in`

// }

// console.log(loginUserMessage("rampal"));
// console.log(loginUserMessage());
// //if we didnt pass anything then it give undefined





function calculateCartPrice(num1){
    return num1;
}

console.log(calculateCartPrice(200,300,400));
//but the fuction is take only one argun=ment so if we want to take multiple argument and we doesnot know how may so we can use rest operator ...

function calculateCartPrice02(...num1){
    return num1;
}
console.log(calculateCartPrice02(200,300,400));

function calculateCartPrice03(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice03(200,300,400));

const user={
    username:"aditya",
    price:"can't afford"
}

function handleObject(obj){
    console.log(`Usrname is ${obj.username} and price is ${obj.price}`);
}

console.log(handleObject(user))
