//sigleton 
//when object is created by constructer then it is signle ton
//when we declare by literals 


const aditya={}
//this is an object

Object.create;
//this is object creation using constructer

const symbol=Symbol("key1")

const addi={
    name:'hitesh',
    symbol:"mykey"
}

console.log(addi.name);
console.log(addi['name'])
console.log(addi.symbol)
//when we use symbol in object its value converted into string
console.log(typeof addi.symbol);

//for using symbol in object so it does not change
const sym2=Symbol("rampal");

const symbolTest={
    [sym2]:"rampal singh"
}
console.log(symbolTest[sym2])
console.log(typeof symbolTest[sym2])

//how to overwrite
addi.name="aditya"

//how to freeze object so we cant change
//Object.freeze(addi)


addi.greeting=function(){
    console.log("hello addi")
}
console.log(addi.greeting);

addi.greetingtwo=function(){
    console.log(`this is name ${this.name}`)
}

console.log(addi.greetingtwo());


const regulerUser={
    email:"aidtyavishwkarna708@mgmail.com",
    fullname:{
        userfullname:{
            firstname:"aditya",
            lastname:"vishwakarma"
        }
    }
}

console.log(regulerUser.fullname.userfullname.firstname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3={obj1,obj2};
console.log(obj3);


const obj4 =Object.assign({},obj1,obj2);
//this is a right way to combine object we should give parathessis with that becouse it assure that the result will be a object
console.log(obj4)


// ... it is a spread operater which spread all the value inside a object or an array
const obj5={...obj1,...obj2};
console.log(obj5)




const tinderUser={};
tinderUser.id="123"
tinderUser.name="rampal"
tinderUser.isLoggedIn=false;

const users=[
    {
        id:1,
        email:"qwerty"
    },
    {
        id:2,
        email:"qwertyu"
    },
    {
        id:3,
        email:"qwertyui"
    }

]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


