// Matches functionality
const startChatButtons = document.querySelectorAll('.start-chat');

startChatButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'chat.html';
    });
});