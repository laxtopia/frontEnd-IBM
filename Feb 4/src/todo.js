function addTask(){

    let data = document.getElementById("input_inside").value;
    
    // console.log(data);
    let task = document.createElement("div");
    // console.log(task);

    let todo = document.getElementById("todo-list");
    let listTask = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type" , "button");
    deleteBtn.textContent = "Delete" ;

    deleteBtn.addEventListener("click" , (e)=> {
        e.preventDefault();
        todo.removeChild( deleteBtn.parentElement  );
    }  );


    // let editBtn = document.createElement("button");
    // editBtn.setAttribute("type" , "button");
    // editBtn.textContent = "Edit" ;

    // let currData = editBtn.parentElement.firstElementChild.value;
    // let formField = document.createElement("input");
    // formField.setAttribute("type" , "text");
    // formField.
    // editBtn.textContent = "Save" ;


    // editBtn.addEventListener("click" , (e)=> {
    //     e.preventDefault();
    //     todo.replace( editBtn.parentElement.firstElementChild.replaceChild(currData)  );
    // }  );

    console.log(task);

    listTask.textContent = data ;
    task.appendChild(listTask);
    task.appendChild(deleteBtn);
    todo.appendChild(task);



}

const btn = document.getElementById("add-task");


btn.addEventListener("click", (e)=>{
    e.preventDefault(); // prevents reload of whole page which is its default nature.  
    console.log("hello");
    addTask();
} );