let flag  = true;

let promExam = new Promise( function (resolve ,reject){
    if(flag){
        resolve("Promise is fullfilled");
    }
    else{
        reject("Promise is failed");
    }
} );



console.log(promExam)

// ####################################


function greet() {
    console.log("greet");
}

setTimeout( () => {console.log("hello")} , 2000 );
setTimeout(  function(){
    console.log("hi")
} , 3000 )
greet();


let add = (resolve,reject)=>{
    resolve("hello");

}

