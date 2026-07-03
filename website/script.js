document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle Mobile Navigation
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Sample Interactive Button Action
    const actionBtn = document.getElementById('action-btn');
    actionBtn.addEventListener('click', () => {
        alert('Welcome! Your site code works flawlessly.');
    });
});
