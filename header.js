document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

// JavaScript in your header.js file
document.addEventListener('DOMContentLoaded', function () {
    const headerContent = document.querySelector('.header-content');

    // Add the 'animate' class to trigger the animation
    headerContent.classList.add('animate');
});
