const arr = [0,1,2,3,4,5];
console.log(arr);
arr.push(6)
console.log(arr);
arr.pop(6)
console.log(arr)
//include give whether it is in arr or not
console.log(arr.includes(9));
console.log(arr.indexOf(3))
console.log(arr.indexOf(8))

const newarr = arr.join();
//it will join the arr with new and convert into strings


console.log(typeof newarr)

const myn1 = arr.slice(1,3);
//it doesn,t include last  range or original array will be same
console.log(myn1);
console.log(arr);

const myn2=arr.splice(1,3);
//it include the range and also delte that part from original arrat
console.log(myn2);
console.log(arr);

