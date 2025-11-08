let savedText = "";

const savedButton = document.getElementById('savedBtn');
const savedTextDisplay = document.getElementById('savedText');
const userTextField = document.getElementById('userText');
 
savedButton.addEventListener('click', function() {
    /* savedText = $("#userText").val();
    $('#savedText').text(savedText); */
    savedText = userTextField.value;
    savedTextDisplay.textContent = savedText;
});