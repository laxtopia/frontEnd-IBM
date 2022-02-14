// 

let tool=document.getElementById("tool");

document.getElementById("hov").addEventListener("click",()=>{
    //alert("occur");
    if (tool.style.display == "none") {
        tool.style.display = "flex";
        tool.style.flexDirection="row";
        tool.style.justifyContent="space-evenly";
        
      } else {
        tool.style.display = "none";
      }
});