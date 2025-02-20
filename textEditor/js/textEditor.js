const boldButton = document.getElementById('bold');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const lessTypeSize = document.getElementById('lessTypeSize');
const moreTypeSize = document.getElementById('moreTypeSize');
const textArea = document.getElementById('textArea');


document.addEventListener("DOMContentLoaded", () => {
    textArea.focus();
});

function toggleButton(button, command) {
    document.execCommand(command, false, null);
    button.classList.add("active");
}

document.getElementById("bold").addEventListener("click", function() {
    toggleButton(this, "bold");
});

document.getElementById("italic").addEventListener("click", function() {
    toggleButton(this, "italic");
});

document.getElementById("underline").addEventListener("click", function() {
    toggleButton(this, "underline");
});


