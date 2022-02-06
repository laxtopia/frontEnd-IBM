var parElem = document.getElementById("app");
var btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//     alert("You've won award ")
// });

btn.addEventListener('mouseover', function(){
    parElem.classList.add("newClass");
});

console.log(btn);