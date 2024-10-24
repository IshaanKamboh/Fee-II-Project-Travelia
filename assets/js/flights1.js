// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (!themeToggle) {
        console.error("Theme toggle button not found. Make sure there's an element with id 'theme-toggle' in your HTML.");
        return;
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        updateThemeToggleButton();
        saveThemePreference();
    });

    function updateThemeToggleButton() {
        themeToggle.textContent = body.classList.contains('light-mode') ? '🌙' : '☀️';
    }

    function saveThemePreference() {
        const isDarkMode = !body.classList.contains('light-mode');
        localStorage.setItem('darkMode', isDarkMode);
    }

    // Check for saved theme preference
    function loadThemePreference() {
        const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        if (isDarkMode === false) {
            body.classList.add('light-mode');
        }
        updateThemeToggleButton();
    }

    // Initialize theme
    loadThemePreference();
});



// Animate the booking form on scroll
function animateBookingForm() {
    const bookingForm = document.querySelector('.booking-form');
    const bookingFormPosition = bookingForm.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (bookingFormPosition < screenPosition) {
        bookingForm.style.opacity = '1';
        bookingForm.style.transform = 'translateY(0)';
    }
}

// Animate destination cards on scroll
function animateDestinationCards() {
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const returnDate = document.getElementById('return').value;

    // Here you would typically send this data to a server
    console.log(`Searching for flights from ${from} to ${to} on ${date}, returning ${returnDate}`);
    alert('Flight search initiated! Check console for details.');
}

// Add parallax effect to the background
function parallaxBackground() {
    const stars = document.querySelector('.stars');
    let scrollPosition = window.pageYOffset;
    stars.style.transform = `translateY(${scrollPosition * 0.5}px)`;
}

// Initialize animations and event listeners
window.addEventListener('scroll', () => {
    animateBookingForm();
    animateDestinationCards();
    parallaxBackground();
});

document.querySelector('.booking-form').addEventListener('submit', handleFormSubmit);

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    animateBookingForm();
    animateDestinationCards();
});