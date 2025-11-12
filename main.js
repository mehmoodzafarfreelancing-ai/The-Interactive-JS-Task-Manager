const savedButton = document.getElementById("savedBtn");
const savedTextDisplay = document.getElementById("savedText");
const userTextField = document.getElementById("userText");
const tasksKey = "myTasks";

function loadTasks() {
  const taskString = localStorage.getItem(tasksKey);
  if (!taskString) return;
  const taskArray = JSON.parse(taskString);
  taskArray.forEach((task) => {
    createTaskElement(task);
  });
}

function saveTasks() {
  let allTasks = [];
  const lielements = document.querySelectorAll("#savedText li");
  lielements.forEach((li) => {
    const span = li.querySelector("span");
    allTasks.push(span.textContent);
  });
  const allTasksString = JSON.stringify(allTasks);
  localStorage.setItem(tasksKey, allTasksString);
}

/* @param {string} taskText  */
function createTaskElement(taskText) {
  /* create a new li */
  const newLi = document.createElement("li");

  const newSpan = document.createElement("span");
  newSpan.textContent = taskText;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    newLi.remove();
    saveTasks();
  });
  newLi.appendChild(newSpan);
  newLi.appendChild(deleteButton);
  savedTextDisplay.appendChild(newLi);
}

savedButton.addEventListener("click", function () {
  /* save the entered value in let savedText */
  const taskText = userTextField.value;
  if (taskText.trim() === "") {
    return;
  }

  createTaskElement(taskText);
  userTextField.value = "";
  saveTasks();
});
loadTasks();
