const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
    preloader.classList.add("remove");
    
    // Check authentication status
    if (!SessionManager.isLoggedIn()) {
        window.location.href = 'login-signup.html';
        return;
    }
    
    // Update UI for logged-in user
    updateUIForLoggedInUser();
});

// Update UI for logged-in user
function updateUIForLoggedInUser() {
    const user = SessionManager.getCurrentUser();
    
    // Update the login/signup buttons in the header
    const headerAction = document.querySelector('.header-action');
    if (headerAction) {
        headerAction.innerHTML = `
            <span class="user-welcome">Welcome, ${user.name}</span>
            <button onclick="handleLogout()" class="btn btn-primary">Logout</button>
        `;
    }
}

// Logout handler
function handleLogout() {
    SessionManager.endSession();
    // Redirect happens automatically in endSession
}

// Original navigation code

/** 
 * add event on mutiple elements
*/


const addEventOnElements = function (elements, eventType, callback) {
    for(let i=0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/** 
 * Navbar toggler for mobile
*/

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);


/** 
 * Header
*/

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

