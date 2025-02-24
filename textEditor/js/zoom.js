const zoomButtons = document.querySelectorAll("#zoomMenu button");
const editor = document.querySelector(".editor")

let currentZoom = 100; 

zoomButtons.forEach(button => {
    button.addEventListener("mousedown", () => {
        button.style.filter = "invert(1)"; 
    });

    button.addEventListener("mouseup", () => {
        button.style.filter = "none"; 
    });
    button.addEventListener("click", () => {
        const zoomType = button.getAttribute("zoom"); 
        zoom(zoomType);
        
    });
});

function zoom(inOrOut) {
    if (inOrOut === "in") {
        currentZoom += 10;
    } else if (inOrOut === "out") {
        currentZoom -= 10;
    }

    if (currentZoom < 50) currentZoom = 50;  
    if (currentZoom > 120) currentZoom = 120; 

    editor.style.transform = `scale(${currentZoom / 100})`;

}
