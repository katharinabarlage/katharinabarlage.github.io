// Basic JS for interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Example: Highlight email on click
    const emailLink = document.querySelector('.contact a');
    if (emailLink) {
        emailLink.addEventListener('click', function() {
            alert('Email link clicked!');
        });
    }
});
