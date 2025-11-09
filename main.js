

const savedButton = document.getElementById('savedBtn');
const savedTextDisplay = document.getElementById('savedText');
const userTextField = document.getElementById('userText');

savedButton.addEventListener('click', function() {

    /* save the entered value in let savedText */
    const savedText = userTextField.value;

    /* create a new li */
    const newLi = document.createElement('li');

    const taskText = document.createElement('span');
    /* save the let savedText value in span of new li */
    taskText.textContent = savedText;

    /* create a new button and then change its name to Delete*/
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

        /* function for deleting the li on clicking on delete */
        deleteButton.addEventListener('click', function() {
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

