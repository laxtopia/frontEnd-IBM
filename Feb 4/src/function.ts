function add(a : number , b : number):number {
    return a+b;
}

console.log( typeof(add(5,2)));


let sum:(a:number , b:number) => number ;  // sum is variable , defining variable type

sum = (a , b ) => a+b ;
console.log(sum(5,8));


//optional parameters 

function add2(  a: number , b : number , c?:number ):number{
    if(typeof c !== undefined){
        return c ;
    }
    return 0 ;
}

console.log(add2 ( 5,3,7));


function totalSal(...numbers:number[]):number{
    let cnt  = 0 ;
    numbers.forEach( (num)=> cnt+= num ) ;
    return cnt;
}

let newArray = [1,2,3,4,5];
newArray.forEach( (element , index) => {
    newArray[index] = element*element;
} );

console.log(newArray);
