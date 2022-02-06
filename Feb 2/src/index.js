let arrOne = [1,2,3,4,5,6];
var arrTwo = arrOne.filter((item) => item % 2 == 0 );
console.log(arrTwo)


arrTwo = arrOne.map((item)=> item*2);
console.log(arrTwo);


const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(array1.reduce(reducer, 5));




let num = 4;
let newNum = "hello";

console.log(num * newNum);


