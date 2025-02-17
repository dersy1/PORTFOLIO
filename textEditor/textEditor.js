const boldButton = document.getElementById('bold');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const highglightButton = document.getElementById('highlighter');
const lessTypeSize = document.getElementById('lessTypeSize');
const moreTypeSize = document.getElementById('moreTypeSize');
const textArea = document.getElementById('textArea');

boldButton.addEventListener('click', function() {
    if (textArea.style.fontWeight === 'bold') {
        textArea.style.fontWeight = 'normal';
    } else {
        textArea.style.fontWeight = 'bold';
    }
});

italicButton.addEventListener('click', function() {
    if (textArea.style.fontStyle === 'italic') {
        textArea.style.fontStyle = 'normal';
    } else {
        textArea.style.fontStyle = 'italic';
    }
});

underlineButton.addEventListener('click', function() {
    if (textArea.style.textDecoration === 'underline') {
        textArea.style.textDecoration = 'none';
    } else {
        textArea.style.textDecoration = 'underline';
    }
});

lessTypeSize.addEventListener('click', function() {
    const currentFontSize = window.getComputedStyle(textArea).fontSize;
    const currentSize = parseInt(currentFontSize);
    textArea.style.fontSize = (currentSize - 2) + 'px';
});

moreTypeSize.addEventListener('click', function() {
    const currentFontSize = window.getComputedStyle(textArea).fontSize;
    const currentSize = parseInt(currentFontSize);
    textArea.style.fontSize = (currentSize + 2) + 'px';
});