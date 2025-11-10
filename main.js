const savedButton = document.getElementById("savedBtn");
const savedTextDisplay = document.getElementById("savedText");
const userTextField = document.getElementById("userText");
const tasksKey = "myTasks";

function loadTasks() {
  const taskString = localStorage.getItem("tasksKey");
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
    const allTasksString = JSON.stringify(allTasks);
    localStorage.setItem("tasksKey", "allTasksString");
  });
}


/* @param {string} taskText  */
function createTaskElement(taskText) {
    /* create a new li */
  const newLi = document.createElement("li");

   const newSpan = document.createElement("span");
   newSpan.textContent = taskText;
}














savedButton.addEventListener("click", function () {
  /* save the entered value in let savedText */
  const savedText = userTextField.value;


/*   const newLi = document.createElement("li"); */



  /* create a new button and then change its name to Delete*/
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  /* function for deleting the li on clicking on delete */
  deleteButton.addEventListener("click", function () {
    newLi.remove();
  });

  newLi.appendChild(taskText);
  /* add newly created button in li */
  newLi.appendChild(deleteButton);

  /* add newly created li (with saved value) in ul */
  savedTextDisplay.appendChild(newLi);
  /* set input field to empty */

  userTextField.value = "";
});
