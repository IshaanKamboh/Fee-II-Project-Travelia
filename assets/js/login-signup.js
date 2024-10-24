// Get DOM elements
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');

// Toggle animation handlers
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Form validation function
function validateForm(email, password, isSignUp = false, name = '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (isSignUp && !name.trim()) {
        alert('Please enter your name');
        return false;
    }
    
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }
    
    return true;
}

// User storage handler
class UserStorage {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || {};
    }
    
    saveUser(name, email, password) {
        if (this.users[email]) {
            throw new Error('User already exists');
        }
        
        this.users[email] = {
            name,
            password,
            dateJoined: new Date().toISOString()
        };
        
        this.saveToLocalStorage();
        return true;
    }
    
    authenticateUser(email, password) {
        const user = this.users[email];
        if (!user) {
            throw new Error('User not found');
        }
        
        if (user.password !== password) {
            throw new Error('Invalid password');
        }
        
        return user;
    }
    
    saveToLocalStorage() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }
}

// Initialize storage
const userStorage = new UserStorage();

// Session handler
class SessionManager {
    static startSession(email, name) {
        sessionStorage.setItem('currentUser', email);
        sessionStorage.setItem('userName', name);
        sessionStorage.setItem('loginTime', new Date().toISOString());
    }
    
    static endSession() {
        sessionStorage.clear();
        this.updateUIForLoggedOutUser();
    }
    
    static isLoggedIn() {
        return sessionStorage.getItem('currentUser') !== null;
    }

    static updateUIForLoggedInUser() {
        const userName = sessionStorage.getItem('userName');
        container.innerHTML = `
            <div class="welcome-container" style="text-align: center; padding: 20px;">
                <h1 style="color: hsl(249, 95%, 63%);">Welcome to Travelia</h1>
                <p>Welcome back, ${userName}!</p>
                <button onclick="SessionManager.endSession()" style="
                    background-color: hsl(249, 95%, 63%);
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 20px;">
                    Logout
                </button>
            </div>`;
    }

    static updateUIForLoggedOutUser() {
        window.location.reload();
    }
}

// Handle sign up submission
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;
    
    if (!validateForm(email, password, true, name)) {
        return;
    }
    
    try {
        userStorage.saveUser(name, email, password);
        alert('Account created successfully! Please log in.');
        container.classList.remove("active"); // Switch to login form
        signUpForm.reset();
    } catch (error) {
        alert(error.message);
    }
});

// Handle sign in submission
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;
    
    if (!validateForm(email, password)) {
        return;
    }
    
    try {
        const user = userStorage.authenticateUser(email, password);
        SessionManager.startSession(email, user.name);
        alert(`Welcome back, ${user.name}!`);
        SessionManager.updateUIForLoggedInUser();
    } catch (error) {
        alert(error.message);
    }
});

// Check for existing session on page load
window.addEventListener('load', () => {
    if (SessionManager.isLoggedIn()) {
        SessionManager.updateUIForLoggedInUser();
    }
});

// Add form submission handling to your existing forms
document.querySelectorAll('form button[type="button"]').forEach(button => {
    button.type = 'submit';
});