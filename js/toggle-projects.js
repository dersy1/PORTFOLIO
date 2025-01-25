document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'es';
    const subtitle = document.getElementById('subtitle');
    const projectTitle = document.getElementById('project-title');

    if (lang === 'eng') {
        projectTitle.textContent = 'My Projects';
        subtitle.textContent = 'Web developer';
    } else {
        projectTitle.textContent = 'Mis Proyectos';
        subtitle.textContent = 'Desarrollador web';
    }

});