const paragraph = document.querySelector(".paragraph");
const paragraphMenu = document.querySelector(".paragraph-menu")


paragraph.addEventListener("click", (event) => {
    event.stopPropagation();

    const rect = paragraph.getBoundingClientRect();
    paragraphMenu.style.top = `${rect.bottom + window.scrollY}px`;
    paragraphMenu.style.left = `${rect.left + window.scrollX - 70}px`;

    paragraphMenu.style.display = paragraphMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (event) => {
    if (!paragraphMenu.contains(event.target) && event.target !== paragraph) {
        paragraphMenu.style.display = "none";
    }
});