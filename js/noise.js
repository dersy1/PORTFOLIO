const canvas = document.createElement('canvas');
canvas.className = 'noise-layer';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function generateNoise() {
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255; 
        data[i] = noise;    
        data[i + 1] = noise;  
        data[i + 2] = noise;  
        data[i + 3] = 25;    
    }

    ctx.putImageData(imageData, 0, 0);
}


function animateNoise() {
    generateNoise();
    requestAnimationFrame(animateNoise);
}


resizeCanvas();
animateNoise();


window.addEventListener('resize', resizeCanvas);