    const boldButton = document.getElementById('bold');
    const italicButton = document.getElementById('italic');
    const underlineButton = document.getElementById('underline');
    const textArea = document.getElementById('textArea');
    const boldSpan = boldButton.querySelector('.material-symbols-outlined');

    boldSpan.classList.add('active');
    textArea.focus();

    function toggleButton(button, command) {
        const span = button.querySelector('.material-symbols-outlined');
        const isActive = span.classList.contains('active');
        
        if (isActive) {
            span.classList.remove('active');
            document.execCommand(command, false, null);
            console.log(`${command} desactivado`);
        } else {
            span.classList.add('active');
            document.execCommand(command, false, null);
            console.log(`${command} activado`);
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