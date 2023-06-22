// Dashboard

let arrow = document.querySelectorAll(".arrow")[0];
let slider = document.querySelectorAll(".slider")[0];
arrow.addEventListener("click", ()=>{
    slider.classList.toggle("close");
});

let toggleBtn = document.querySelectorAll(".checkbox")[0];
let body = document.querySelectorAll(".main-body")[0];
let search = document.querySelectorAll(".search")[0];
toggleBtn.addEventListener("click", ()=>{
    body.classList.toggle("dark");
    slider.classList.toggle("middark");
    slider.classList.toggle("color");
    search.classList.toggle("searchcolor");
});

// Todo List function 

window.addEventListener("load", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const list = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    // if(input.value === "") {
    //   alert("You must add a task")
    //   return false;
    // }
    if (!task) {
      alert("You must add a task");
      return;
    }

    const taskDiv = document.createElement("div");
    list.appendChild(taskDiv);

    const taskContentDiv = document.createElement("div");
    taskDiv.appendChild(taskContentDiv);

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = task;
    taskInput.setAttribute("readonly", "readonly");
    taskContentDiv.appendChild(taskInput);

    const taskActionsDiv = document.createElement("div");
    taskDiv.appendChild(taskActionsDiv);

    const taskEditBotton = document.createElement("button");
    taskEditBotton.innerHTML = 'Edit';

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.innerHTML = "Delete";

    const taskCompletedButton = document.createElement("button");
    taskCompletedButton.innerHTML = "Completed";

    // const taskUncheckedButton = document.createElement("button");
    // taskUncheckedButton.innerHTML = "Uncompleted"

    taskActionsDiv.appendChild(taskEditBotton);
    taskActionsDiv.appendChild(taskCompletedButton);
    taskActionsDiv.appendChild(taskDeleteButton);
    // taskActionsDiv.appendChild(taskUncheckedButton);

    taskEditBotton.addEventListener("click", () => {
      if (taskEditBotton.innerText.toLowerCase() == "edit") {
        taskInput.removeAttribute("readonly");
        taskInput.focus();
        taskEditBotton.innerText = "Update";
        // taskInput.style.textDecoration = "none";
      } else {
        taskInput.setAttribute("readonly", "readonly");
        taskEditBotton.innerText = "Edit";
      }
    });

    taskCompletedButton.addEventListener("click", () => {
      if (taskCompletedButton.innerText.toLowerCase() == "completed") {
        taskInput.setAttribute("readonly", "readonly");
        taskCompletedButton.innerText = "Uncompleted";
        taskInput.style.textDecoration = "line-through";
      } else {
        taskCompletedButton.innerText = "Completed";
        taskInput.style.textDecoration = "none";
      }
    });

    taskDeleteButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this task?")) {
        list.removeChild(taskDiv);
      }
    });

    // taskCompletedButton.addEventListener("click", () => {
    //   taskInput.style.textDecoration = "line-through";
    //   taskInput.setAttribute("readonly", "readonly");
    // });

    // taskUncheckedButton.addEventListener("click", () =>{
    //   taskInput.style.textDecoration = "";
    //   taskInput.removeAttribute("readonly");
    // })

    // empty the field after "add button"

    input.value = "";
  });
});
