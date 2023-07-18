const noteContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

function showNotes() {
  noteContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}
// localStorage.clear("note");

// function to add

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "../pages/delete.png";
  noteContainer.appendChild(inputBox).appendChild(img);
});

// function to delete
noteContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
