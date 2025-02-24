const fontButton = document.getElementById("fontButton");
const fontMenu = document.getElementById("fontMenu");

const fonts = [
    "Helvetica",
    "Arial",
    "Times New Roman",
    "Bahnschrift"
];

function populateFontMenu() {
    fontMenu.innerHTML = ""; 

    fonts.forEach(font => {
        const button = document.createElement("button");
        button.classList.add("font-option");
        button.textContent = font;
        button.style.fontFamily = font;
        button.setAttribute("data-font", font);
        button.addEventListener("click", () => applyFont(font));
        fontMenu.appendChild(button);
    });
}

function applyFont(font) {
    textArea.style.fontFamily = font;
    fontMenu.style.display = "none"; 
    fontButton.textContent = font;
    fontButton.style.fontFamily = font;
}

fontButton.addEventListener("click", (event) => {
    event.stopPropagation();
    
    const rect = fontButton.getBoundingClientRect();
    fontMenu.style.top = `${rect.bottom + window.scrollY}px`;
    fontMenu.style.left = `${rect.left + window.scrollX}px`;

    fontMenu.style.display = fontMenu.style.display === "block" ? "none" : "block";
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", (event) => {
    if (!fontMenu.contains(event.target) && event.target !== fontButton) {
        fontMenu.style.display = "none";
    }
});

populateFontMenu();
