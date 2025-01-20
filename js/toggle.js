const button=document.getElementById('eng');
const subtitle=document.getElementById('subtitle')
const about=document.getElementById('about-me')
const description=document.getElementById('description');
const download=document.getElementById('download');
let es = true;
subtitle.textContent= 'Desarrollador web';
about.textContent='Sobre mí';
description.textContent= 'Soy un desarrollador web full stack. Disfruto trabajando en equipo. Poseo formación avanzada en dibujo, animación e inglés.';
download.textContent='VER CV';
button.addEventListener('click', function() {
    es = !es;
    if(es){
    button.textContent = 'ES';
    subtitle.textContent= 'Web developer';
    about.textContent= 'About me';
    description.textContent='I am a full-stack web developer, who enjoys working in a team. I have advanced training in English, drawing and animation.';
    download.textContent='MY RESUME';
    }else{  
    button.textContent = 'ENG';
    subtitle.textContent= 'Desarrollador web';
    about.textContent='Sobre mi';
    description.textContent='Actualmente estudio Desarrollo Web en la UnLaM. Soy una persona responsable'+
    'predispuesta a adquirir nuevos conocimientos y me gusta trabajar en equipo.'+ 
    'Poseo una formación avanzada de inglés y animación.';
    download.textContent='VER CV';
    }
  });



