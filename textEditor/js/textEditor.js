    import { changeStyle } from "./changeStyle.js";
    
    const boldButton = document.getElementById('bold');
    const italicButton = document.getElementById('italic');
    const underlineButton = document.getElementById('underline');
    const textArea = document.getElementById('textArea');
    const title = document.getElementById("title");
    const maxLength = 23;


    textArea.focus();


    title.addEventListener("beforeinput", function (event) {
        if (title.innerText.length >= maxLength && event.inputType !== "deleteContentBackward") {
          event.preventDefault();
        }
      });

    function toggleButton(button, styleToChange, activeValue, inactiveValue = "") {
        const span = button.querySelector('.material-symbols-outlined');
        const isActive = span.classList.contains('active');
        
        if (isActive) {
            span.classList.remove('active');
            changeStyle(styleToChange, activeValue);
        } else {
            span.classList.add('active');
            changeStyle(styleToChange, inactiveValue);
        }
    }

    if (boldButton) {
        boldButton.addEventListener("click", function(e) {
            e.preventDefault();
            toggleButton(this, "fontWeight", "bold", "normal");
        });
    }

    if (italicButton) {
        italicButton.addEventListener("click", function(e) {
            e.preventDefault();
            toggleButton(this, "fontStyle", "italic", "normal");
        });
    }

    if (underlineButton) {
        underlineButton.addEventListener("click", function(e) {
            e.preventDefault();
            toggleButton(this, "textDecoration", "underline", "none");
        });
    }