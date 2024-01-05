const button=document.getElementById('eng');
const subtitle=document.getElementById('subtitle')
const about=document.getElementById('about-me')
const description=document.getElementById('description');
const download=document.getElementById('download');
let es = true;
subtitle.textContent= 'Desarrollador web';
about.textContent='Sobre mi';
description.textContent='Actualmente estudio Desarrollo Web en la UnLaM. Soy una persona responsable, '+
'predispuesta a adquirir nuevos conocimientos y me gusta trabajar en equipo.'+ 
' Poseo una formación avanzada de inglés y animación.';
download.textContent='VER CV';
button.addEventListener('click', function() {
    es = !es;
    if(es){
    button.textContent = 'ES';
    subtitle.textContent= 'Web developer';
    about.textContent= 'About me';
    description.textContent='Currently, I am studying Web Development at UnLaM. I am a responsible person, eager to acquire'+ 
    ' new knowledge, and I enjoy teamwork. I have advanced skills in English and animation.';
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



