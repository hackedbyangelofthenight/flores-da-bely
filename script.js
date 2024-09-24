const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    section.addEventListener('click', () => {
        alert(`Você clicou na seção ${section.id}!`);
    });
});