var par=document.getElementById("app");
// console.log(par);
// var newEle=document.createElement("li");
// newEle.textContent="newfirstChild";
// par.replaceChild(newEle,par.firstElementChild);
// par.removeChild(par.lastElementChild);

// var newEle=document.createElement("li");
// newEle.textContent="appended Child";
// par.appendChild(newEle);

var newEle=document.createElement("li");
newEle.textContent="inserted before second Child";
par.insertBefore(newEle , par.firstElementChild.nextElementSibling);

var gg = newEle;
// par.insertBefore(gg.cloneNode(true),par.children[1]);


// console.log(par.childNodes);




console.log(par.childNodes);

var newEle=document.createElement("li");
newEle.textContent="inserted after second Child";
insertAfter(newEle,par.children[1]);




function insertAfter(newEle, positionEle) {
    positionEle.parentNode.insertBefore(newEle,positionEle.nextElementSibling);
 }

// ###########################################################

var parElem = document.getElementById("app");
parElem.setAttribute("class" , "listname");


console.log(parElem.hasAttribute("class"));
// parElem.removeAttribute("class");

console.log( parElem.classList );
parElem.classList.add("newClass");
console.log(parElem);

console.log( parElem.classList );



// classlist 
// parElem