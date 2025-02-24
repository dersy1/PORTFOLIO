document.addEventListener("DOMContentLoaded", () => {
    const colorButton = document.querySelector(".color-type");
    const colorMenu = document.querySelector(".color-menu");
    const colorPicker = document.getElementById("colorPicker");

    

    colorButton.addEventListener("click", (event) => {
        event.stopPropagation();

        const rect = colorButton.getBoundingClientRect();
        colorMenu.style.top = `${rect.bottom + window.scrollY}px`;
        colorMenu.style.left = `${rect.left + window.scrollX}px`;

        colorMenu.style.display = colorMenu.style.display === "block" ? "none" : "block";
    });

    colorPicker.addEventListener("input", (event) => {
        const color = event.target.value;
        colorButton.style.backgroundColor = color;
        document.execCommand("foreColor", false, color);

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
            colorButton.style.backgroundColor = color;
            colorMenu.style.display = "none";
        });
    });
});
