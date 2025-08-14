// Mobile menu functionality
const menuToggle = document.getElementById('menuToggle');
const navLinksContainer = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = navLinksContainer.classList.contains('active') 
        ? 'rotate(45deg) translate(6px, 6px)' 
        : 'none';
    spans[1].style.opacity = navLinksContainer.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navLinksContainer.classList.contains('active') 
        ? 'rotate(-45deg) translate(6px, -6px)' 
        : 'none';
});