document.addEventListener("DOMContentLoaded", () => {
    const colorButton = document.querySelector(".color-type");
    const colorMenu = document.querySelector(".color-menu");
    const textArea = document.getElementById("textArea");

    colorButton.addEventListener("click", (event) => {
        event.stopPropagation();
        colorMenu.style.display = colorMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (event) => {
        if (!colorMenu.contains(event.target) && event.target !== colorButton) {
            colorMenu.style.display = "none";
        }
    });

    document.querySelectorAll(".color-option").forEach(button => {
        button.addEventListener("click", (event) => {
            const color = event.target.getAttribute("data-color");
            document.execCommand("foreColor", false, color);
            colorMenu.style.display = "none";
        });
    });
});
