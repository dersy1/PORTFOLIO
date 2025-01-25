const button = document.getElementById('eng');
const subtitle = document.getElementById('subtitle');
const about = document.getElementById('about-me');
const description = document.getElementById('description');
const download = document.getElementById('download');
const folderText = document.getElementById('folder-text');
const folder = document.getElementById('folder');
let es = true;

subtitle.textContent = 'Desarrollador web';
about.textContent = 'Sobre mí';
description.textContent = 'Soy un desarrollador web full stack. Disfruto trabajando en equipo. Poseo formación avanzada en dibujo, animación e inglés.';
download.textContent = 'VER CV';
folderText.textContent = 'Proyectos';

button.addEventListener('click', function() {
    es = !es;
    if (es) {
        button.textContent = 'ES';
        subtitle.textContent = 'Web developer';
        about.textContent = 'About me';
        description.textContent = 'I am a full-stack web developer, who enjoys working in a team. I have advanced training in English, drawing, and animation.';
        download.textContent = 'MY RESUME';
        folderText.textContent = 'Projects';
        folder.querySelector('i').textContent = 'folder';
    } else {
        button.textContent = 'ENG';
        subtitle.textContent = 'Desarrollador web';
        about.textContent = 'Sobre mí';
        description.textContent = 'Soy un desarrollador web full stack. Disfruto trabajando en equipo. Poseo formación avanzada en dibujo, animación e inglés.';
        download.textContent = 'VER CV';
        folderText.textContent = 'Proyectos';
        folder.querySelector('i').textContent = 'folder';
    }
});


folder.addEventListener('click', function (event) {
    event.preventDefault();
    const lang = es ? 'es' : 'eng';
    const newHref = `routes/projects.html?lang=${lang}`;
    window.location.href = newHref; 
});


