    const boldButton = document.getElementById('bold');
    const italicButton = document.getElementById('italic');
    const underlineButton = document.getElementById('underline');
    const textArea = document.getElementById('textArea');
    const boldSpan = boldButton.querySelector('.material-symbols-outlined');
    const title = document.getElementById("title");
    const maxLength = 23;


    boldSpan.classList.add('active');
    textArea.focus();


    title.addEventListener("beforeinput", function (event) {
        if (title.innerText.length >= maxLength && event.inputType !== "deleteContentBackward") {
          event.preventDefault();
        }
      });

    function toggleButton(button, command) {
        const span = button.querySelector('.material-symbols-outlined');
        const isActive = span.classList.contains('active');
        
        if (isActive) {
            span.classList.remove('active');
            document.execCommand(command, false, null);
        } else {
            span.classList.add('active');
            document.execCommand(command, false, null);
        }
    }

    if (boldButton) {
        boldButton.addEventListener("click", function(e) {
            e.preventDefault();
            toggleButton(this, "bold");
        });
    }

    if (italicButton) {
        italicButton.addEventListener("click", function(e) {
            e.preventDefault();
            toggleButton(this, "italic");
        });
    }

    if (underlineButton) {
        underlineButton.addEventListener("click", function(e) {
            e.preventDefault();
            toggleButton(this, "underline");
        });
    }