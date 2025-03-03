export function changeStyle(styleToChange, newValue){
    if(thereIsSelection()){
        applyStyleToSelection(styleToChange, newValue)
    }
    else{
        applyStyleOnward(styleToChange, newValue)
    }
}


function thereIsSelection(){
    const selection = window.getSelection();
    return selection.rangeCount > 0 && !selection.isCollapsed;
}

function applyStyleToSelection(styleToChange, newValue) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    console.log("Texto seleccionado:", selection.toString());

    const range = selection.getRangeAt(0);
    const fragment = range.extractContents(); // Extrae el contenido seleccionado

    console.log("Fragmento extraído:", fragment);

    // Crear un nuevo span para aplicar el estilo
    const span = document.createElement("span");

    // Verifica que newValue sea correcto
    console.log(`Estableciendo estilo: ${styleToChange} = ${newValue}`);

    // Aplicar el estilo directamente al span con !important para mayor prioridad
    span.style[styleToChange] = newValue;
    if (styleToChange === "fontWeight") {
        span.style.setProperty("font-weight", newValue, "important"); // Usar !important para sobrescribir
    }

    console.log(`Estilo aplicado al span inicialmente: ${span.style[styleToChange]}`);

    // Procesar el fragmento para eliminar o sobrescribir estilos existentes
    function cleanStyles(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            // Si es un elemento (como un span), manejar sus estilos
            if (node.style) {
                // Eliminar o sobrescribir el estilo específico que estamos cambiando
                if (styleToChange === "fontWeight") {
                    node.style.fontWeight = newValue; // Sobrescribe directamente el font-weight
                    node.style.setProperty("font-weight", newValue, "important"); // Usar !important
                }
                // Eliminar el atributo style si no hay otros estilos necesarios
                if (node.style.length === 0) {
                    node.removeAttribute("style");
                }
            }
            // Remover nodos span innecesarios para simplificar
            if (node.tagName && node.tagName.toLowerCase() === "span" && !node.style.length) {
                while (node.firstChild) {
                    node.parentNode.insertBefore(node.firstChild, node);
                }
                node.parentNode.removeChild(node);
            }
            // Recorrer los hijos del nodo
            for (let child of node.childNodes) {
                cleanStyles(child);
            }
        } else if (node.nodeType === Node.TEXT_NODE) {
            // Si es un nodo de texto, envolverlo en un span con el nuevo estilo si es necesario
            const parent = node.parentNode;
            if (parent && parent.style && styleToChange === "fontWeight" && parent.style.fontWeight !== newValue) {
                const newSpan = document.createElement("span");
                newSpan.style.fontWeight = newValue;
                newSpan.style.setProperty("font-weight", newValue, "important"); // Usar !important
                newSpan.appendChild(node.cloneNode(true));
                parent.replaceChild(newSpan, node);
            }
        }
    }

    // Limpiar los estilos del fragmento antes de insertarlo
    cleanStyles(fragment);

    // Añadir el fragmento limpiado al span
    span.appendChild(fragment);

    console.log(`Contenido del span antes de insertar: ${span.innerHTML}`);
    console.log(`Estilo aplicado al span antes de insertar: ${span.style[styleToChange]}`);

    // Insertar el span en la posición del rango
    range.insertNode(span);

    console.log("Span insertado:", span);
    console.log("Contenido del span después de insertar:", span.innerHTML);
    console.log("Estilo aplicado al span después de insertar:", span.style[styleToChange]);

    // Verificar y corregir el estilo si es necesario
    if (span.style[styleToChange] !== newValue) {
        console.log("Aplicando estilo nuevamente...");
        span.style[styleToChange] = newValue;
        span.style.setProperty(styleToChange, newValue, "important"); // Usar !important nuevamente
    }
}


function applyStyleOnward(styleToChange, newValue) {
    const textArea = document.getElementById("textArea"); // Asegúrate de que el textArea existe
    if (!textArea) {
        console.error("textArea no encontrado");
        return;
    }

    console.log(`Aplicando estilo futuro: ${styleToChange} = ${newValue}`);

    // Crear un span con el estilo para referencia, aunque no lo insertemos aún
    const span = document.createElement("span");
    span.style[styleToChange] = newValue;

    // Guardar el estilo en el textArea para aplicarlo al próximo texto ingresado
    if (styleToChange === "fontWeight") {
        textArea.dataset.pendingFontWeight = newValue; // Usar un nombre específico para fontWeight
    } else {
        textArea.dataset.pendingStyle = JSON.stringify({ [styleToChange]: newValue }); // Para otros estilos
    }

    console.log(`Estilo guardado en textArea:`, textArea.dataset);

    // Opcional: Insertar un marcador invisible (por ejemplo, un espacio no rompiendo) para indicar el estilo pendiente
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        if (range.collapsed) { // Solo si hay cursor, no selección
            const marker = document.createElement("span");
            marker.style.display = "none"; // Hacerlo invisible
            marker.dataset.pendingStyle = styleToChange; // Marcar para depuración
            marker.innerHTML = " "; // Espacio no rompiendo
            range.insertNode(marker);
            console.log("Marcador invisible insertado para el estilo pendiente");
        }
    }
}

// Escuchar eventos en el textArea para aplicar el estilo pendiente
const textArea = document.getElementById("textArea");
if (textArea) {
    textArea.addEventListener("keypress", (event) => {
        console.log("Keypress en textArea, estilos pendientes:", textArea.dataset);
        applyPendingStyles();
    });

    textArea.addEventListener("input", (event) => {
        console.log("Input en textArea, estilos pendientes:", textArea.dataset);
        applyPendingStyles();
    });

    function applyPendingStyles() {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const pendingFontWeight = textArea.dataset.pendingFontWeight;
            const pendingStyle = textArea.dataset.pendingStyle ? JSON.parse(textArea.dataset.pendingStyle) : {};

            if (pendingFontWeight || Object.keys(pendingStyle).length > 0) {
                const span = document.createElement("span");
                if (pendingFontWeight) {
                    span.style.fontWeight = pendingFontWeight;
                    span.style.setProperty("font-weight", pendingFontWeight, "important"); // Usar !important
                    delete textArea.dataset.pendingFontWeight;
                }
                if (pendingStyle) {
                    Object.assign(span.style, pendingStyle);
                    delete textArea.dataset.pendingStyle;
                }

                console.log("Aplicando estilos pendientes:", span.style);

                if (!range.collapsed) { // Si hay selección, aplicar al texto seleccionado
                    range.surroundContents(span);
                } else { // Si solo hay cursor, insertar el span con el texto ingresado
                    const textNode = document.createTextNode("");
                    span.appendChild(textNode);
                    range.insertNode(span);
                    range.setStart(textNode, 0);
                    range.setEnd(textNode, 0);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
                console.log("Estilos pendientes aplicados, contenido del textArea:", textArea.innerHTML);
            }
        }
    }
}