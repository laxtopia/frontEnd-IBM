


let toggle = document.getElementById("sh-btn");
console.log(toggle);

let dialog = document.getElementById("share-div");
console.log(dialog);

toggle.addEventListener('click' , ()=>{
    
    var x = document.getElementById("share-div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  
});