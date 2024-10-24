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

// Session handler with redirect
class SessionManager {
    static startSession(email, name) {
        sessionStorage.setItem('currentUser', email);
        sessionStorage.setItem('userName', name);
        sessionStorage.setItem('loginTime', new Date().toISOString());
        
        // Redirect to home page after successful login
        window.location.href = 'index.html';
    }
    
    static endSession() {
        sessionStorage.clear();
        // Redirect to login page after logout
        window.location.href = 'login-signup.html';
    }
    
    static isLoggedIn() {
        return sessionStorage.getItem('currentUser') !== null;
    }

    static getCurrentUser() {
        return {
            email: sessionStorage.getItem('currentUser'),
            name: sessionStorage.getItem('userName')
        };
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
        // Redirect happens automatically in startSession
    } catch (error) {
        alert(error.message);
    }
});

// Add form submission handling to your existing forms
document.querySelectorAll('form button[type="button"]').forEach(button => {
    button.type = 'submit';
});