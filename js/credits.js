// Credits page functionality
const buyButtons = document.querySelectorAll('.buy-credits');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const package = button.closest('.package');
        const packageName = package.querySelector('h3').textContent;
        const price = package.querySelector('.price').textContent;
        
        alert(`Processing payment for ${packageName} package at ${price}`);
    });
});