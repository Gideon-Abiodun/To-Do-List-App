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
    taskDiv.classList.add("task");
    list.appendChild(taskDiv);

    const taskContentDiv = document.createElement("div");
    taskContentDiv.classList.add("content");
    taskDiv.appendChild(taskContentDiv);

    const taskInput = document.createElement("input");
    taskInput.classList.add("text");
    taskInput.type = "text";
    taskInput.value = task;
    taskInput.setAttribute("readonly", "readonly");
    taskContentDiv.appendChild(taskInput);

    const taskActionsDiv = document.createElement("div");
    taskActionsDiv.classList.add("actions");
    taskDiv.appendChild(taskActionsDiv);

    // var editIcon = document.createElement("i");
    // editIcon.classList.add("fas", "fa-edit");
    // editIcon.addEventListener("click", function () {
    //   editTask(index);
    // });

    const taskEditBotton = document.createElement("button");
    taskEditBotton.innerHTML = "🖍";

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.classList.add("Delete");
    taskDeleteButton.innerHTML = '<i class="bi bi-trash"></i>';

    const taskCompletedButton = document.createElement("button");
    taskCompletedButton.innerHTML = "✔";

    // const taskUncheckedButton = document.createElement("button");
    // taskUncheckedButton.innerHTML = "Uncompleted"

    taskActionsDiv.appendChild(taskEditBotton);
    taskActionsDiv.appendChild(taskCompletedButton);
    taskActionsDiv.appendChild(taskDeleteButton);
    // taskActionsDiv.appendChild(taskUncheckedButton);

    taskEditBotton.addEventListener("click", () => {
      if (taskEditBotton.innerText === "🖍") {
        taskInput.removeAttribute("readonly");
        taskCompletedButton.disabled = true;
        taskInput.focus();
        taskEditBotton.innerText = "✔";
        taskInput.style.textDecoration = "none";
      } else {
        taskInput.setAttribute("readonly", "readonly");
        taskCompletedButton.disabled = false;
        taskEditBotton.innerText = "🖍";
        taskInput.style.textDecoration = "none";
      }
    });

    taskCompletedButton.addEventListener("click", () => {
      if (taskCompletedButton.innerText === "✔") {
        taskInput.setAttribute("readonly", "readonly");
        // taskInput.setAttribute("disabled", true);
        taskCompletedButton.innerText = "❌";
        taskInput.style.textDecoration = "line-through";
        taskInput.style.color = "crimson";
        // alert("hello")
      } else {
        taskCompletedButton.innerText = "✔";
        // taskInput.setAttribute("disabled", false);
        taskInput.style.textDecoration = "none";
        taskInput.style.color = "#afafaf"
      }
    });

    taskDeleteButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this task?")) {
        list.removeChild(taskDiv);
      }
    });

    // empty the field after "add button"
    
    input.value = "";
  });
});

// taskCompletedButton.addEventListener("click", () => {
//   taskInput.style.textDecoration = "line-through";
//   taskInput.setAttribute("readonly", "readonly");
// });

// taskUncheckedButton.addEventListener("click", () =>{
//   taskInput.style.textDecoration = "";
//   taskInput.removeAttribute("readonly");
// })