const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active'); // Toggle visibility of nav links
    });

    navLinks.addEventListener('click', () => {
        navLinks.classList.remove('nav-active'); // Hide links when clicked
    });
}


document.getElementById('schedule-meeting-button').addEventListener('click', () => {
    window.open('https://calendly.com/almirdumisic', '_blank');
});

