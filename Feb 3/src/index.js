let count = new Promise( (resolve , reject)=> {

    resolve("Promise is resolved ");
} );

count.then( (result)=>{
    console.log(result);
} );

console.log(count);