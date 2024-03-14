let a = 10;
let b =20;
var c = 30 ;


//var : var is not bloack scope

//when we go to inscept console and check scope is diff then when we check using node

//nested scopes
//closure

function one (){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);

    }
    //console.log(website); we cant use it there becouse it scope is in only two so outside two we cant use

    two()
}
one() 

// ****************** interesting ******************
addone(3)
function addone(num){
    return num+1;
}

addone(5)


//it is also called expresions
//we cant preuse this function 
const addtwo=function(num){
    return num+2;

}
addtwo(5);





