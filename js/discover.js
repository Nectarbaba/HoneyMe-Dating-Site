// Like/Dislike functionality
const likeButton = document.querySelector('.like');
const dislikeButton = document.querySelector('.dislike');

function showNextProfile() {
    const card = document.querySelector('.card');
    card.style.opacity = '0';
    setTimeout(() => {
        const randomId = Math.floor(Math.random() * 1000);
        const names = ['Emma', 'Sophia', 'Olivia', 'Isabella', 'Ava'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomAge = Math.floor(Math.random() * 10) + 25;
        
        document.querySelector('.card-image img').src = 
            `https://images.unsplash.com/photo-${randomId}`;
        document.querySelector('.card-info h2').textContent = 
            `${randomName}, ${randomAge}`;
        card.style.opacity = '1';
    }, 300);
}

likeButton.addEventListener('click', () => {
    likeButton.style.transform = 'scale(1.2)';
    setTimeout(() => {
        likeButton.style.transform = 'scale(1)';
        showNextProfile();
    }, 200);
});

dislikeButton.addEventListener('click', () => {
    dislikeButton.style.transform = 'scale(1.2)';
    setTimeout(() => {
        dislikeButton.style.transform = 'scale(1)';
        showNextProfile();
    }, 200);
});