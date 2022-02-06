function add(a, b) {
    return a + b;
}
console.log(typeof (add(5, 2)));
var sum; // sum is variable , defining variable type
sum = function (a, b) { return a + b; };
console.log(sum(5, 8));
//optional parameters 
function add2(a, b, c) {
    if (typeof c !== undefined) {
        return c;
    }
    return 0;
}
console.log(add2(5, 3, 7));
function totalSal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var cnt = 0;
    numbers.forEach(function (num) { return cnt += num; });
    return cnt;
}
var newArray = [1, 2, 3, 4, 5];
newArray.forEach(function (element, index) {
    newArray[index] = element * element;
});
console.log(newArray);
