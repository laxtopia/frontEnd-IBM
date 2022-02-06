
enum socialMedia {
    fB,
    insta
  };
  console.log(socialMedia);



function sum(a:number,b:number){
  return a+b;
}
sum(5,2);


let data: any;
data = ["skill ", 20, true]; // only 2 possible one string one number
console.log(data);

let data2: [string, number, number?];
data2 = ["skill ", 20]; // only 2 possible one string one number
console.log(data2);



let emp: {
  fname: string;
  lName: string;
  age: number;
} = {
  fname: "Tom",
  lName: "Jerry",
  age: 23
};

console.log(emp);

let num2: string = "one ";
console.log(num2);
let newArr : (string | number)[]  = [ "One" , "Two" , "Three" ];
newArr.push(4);
console.log(newArr);


let num = 1;
let greet = "how are u ";
console.log(`hi i am ${greet} , ${num} = &{33} `);
