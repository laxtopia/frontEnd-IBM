
let student = {
    firstName : "Tom",
    Age : 30,
    "last Name":  "Jerry"
};
student["last Name"] = "Laxman ";
student.salery = 1000;
delete student.Age;
console.log(student);


for( let key in student ){
    console.log(student[key]);
}


let newArr = [1,2,3,4,5]
let [x,y] = newArr;
console.log(x,y);
 [x,,y] = newArr; // ignoring the element 
// let[x,y,z] = newArr.slice(1,4);
console.log(x,y);



const students = {
    fname:"tom",
    lName:"jerry",
    age:20
};

let {fname:firstName , lName:lastName } = students ;
console.log(firstName, lastName);

let {fname , lName , age  = 30} = students ;
console.log(fname, lName,age);
console.log(students);



function showRest(a,b,...args){
    console.log(a);
    console.log(b);
    console.log(args);
}

showRest('One','Two', 'Three','Four','Five');


function add(...args){
    return args.reduce( (result,items) => result+items , 0 );
}
console.log(add(1,2,3,4));


let arrone = [1,2,3];
let arrTwo = [4,5,6];
console.log(arrTwo.concat(arrone));

arrTwo = [0 , 0 , ...arrone , 4,5,6];
console.log(arrTwo);