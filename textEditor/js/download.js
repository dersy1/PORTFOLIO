const download = document.querySelector("#download");

download.addEventListener('click', function () {

    const element = document.querySelector("#textArea");

    html2pdf()
    .from(element)
    .set({
        margin: [20, 20, 20, 20],  
        filename: `${title.innerText}.pdf`,
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    })
    .save(); 
});