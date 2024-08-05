document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enter-button');
    const welcomePage = document.getElementById('welcome-page');
    const invitationPage = document.getElementById('invitation-page');

    enterButton.addEventListener('click', () => {
        welcomePage.style.display = 'none';
        invitationPage.style.display = 'block';
    });
});

const phoneLink = document.getElementById('phone-link');
    phoneLink.addEventListener('click', (event) => {
        event.preventDefault();
        const phoneNumber = phoneLink.textContent;
        navigator.clipboard.writeText(phoneNumber).then(() => {
            window.location.href = `tel:${phoneNumber}`;
        });
    });