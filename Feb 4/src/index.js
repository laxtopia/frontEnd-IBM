var socialMedia;
(function (socialMedia) {
    socialMedia[socialMedia["fB"] = 0] = "fB";
    socialMedia[socialMedia["insta"] = 1] = "insta";
})(socialMedia || (socialMedia = {}));
;
console.log(socialMedia);
function sum(a, b) {
    return a + b;
}
sum(5, 2);
var data;
data = ["skill ", 20, true]; // only 2 possible one string one number
console.log(data);
var data2;
data2 = ["skill ", 20]; // only 2 possible one string one number
console.log(data2);
var emp = {
    fname: "Tom",
    lName: "Jerry",
    age: 23
};
console.log(emp);
var num2 = "one ";
console.log(num2);
var newArr = ["One", "Two", "Three"];
newArr.push(4);
console.log(newArr);
var num = 1;
var greet = "how are u ";
console.log("hi i am ".concat(greet, " , ").concat(num, " = &{33} "));
