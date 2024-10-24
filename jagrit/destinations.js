const destinations = [
    { name: "Beautiful Beach", category: "Beaches", img: "assets/images/iskcon_bangalore.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Beas Manali", category: "Mountains", img: "assets/images/beas_manali.jpg", info: "A tranquil mountain getaway with breathtaking views." },
    { name: "India Gate-Delhi The Capital City", category: "Cities", img: "assets/images/india-gate-a-beautiful (1).jpg", info: "A bustling city filled with life and culture." },
    { name: "BIR", category: "Adventure", img: "assets/images/BIR.jpg", info: "An exciting trek through rugged landscapes." },
    { name: "Hyatt Regency Chandigarh", category: "Romantic", img: "assets/images/hyatt regency chandigarh.webp", info: "A perfect romantic escape in a beautiful setting." },
    { name: "Cultural Hub", category: "Cultural", img: "assets/images/iskcon_bangalore.jpg", info: "Experience rich cultures and traditions." },
    { name: "Serchhip", category: "Wildlife", img: "assets/images/SERCHHIP.jpg", info: "An exhilarating safari experience." },
    { name: "Tropical Island", category: "Islands", img: "assets/images/iskcon_bangalore.jpg", info: "A beautiful tropical paradise." },
    { name: "Agatti Beach", category: "Beaches", img: "assets/images/agatti-island-god-s-own.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Kovalam Beach", category: "islands", img: "assets/images/at-kovalam-beach.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Ayodhya Nagri", category: "temple", img: "assets/images/ayodhya.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Baga Sea Beach", category: "Beaches", img: "assets/images/baga-sea-beach.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Benaulim Beach", category: "Beaches", img: "assets/images/benaulim-beach.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Chadar Trek", category: "Adventure", img: "assets/images/chadar trek.jpg", info: "An exciting trek through rugged landscapes." },
    { name: "Church At Ridge", category: "temple", img: "assets/images/church-at-ridge.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Dasvamedh Ghat", category: "temple", img: "assets/images/dasaswamedh-ghat.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Akshar Dham Delhi", category: "temple", img: "assets/images/delhi_akshardham.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Dhanushkodi", category: "temple", img: "assets/images/dhanushkodi.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Dwarka", category: "temple", img: "assets/images/dwarkadish.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Har Ki Paudi", category: "temple", img: " assets/images/ganga-aarti-at-har-ki.jpg ", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Hawa Mahal", category: "Cultural", img: "assets/images/hawamahal.jpg", info: "Experience rich cultures and traditions." },
    { name: "Kala Pathar Island", category: "Islands", img: "assets/images/kala pathar.jpg", info: "A beautiful tropical paradise." },
    { name: "Kamshet Island", category: "Islands", img: "assets/images/KAMSHET.jpg", info: "A beautiful tropical paradise." },
    { name: "Howrah Bridge Kolkata", category: "Cities", img: "assets/images/kolkata.jpg", info: "A bustling city filled with life and culture." },
    { name: "Marina Beach Chennai", category: "Beaches", img: "assets/images/marina-beach.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "River Rafting Rishikesh", category: "Adventure", img: "assets/images/rishikesh-river-rafting.jpg", info: "An exciting trek through rugged landscapes." },
    { name: "Sukhna Lake", category: "Cities", img: "assets/images/sukhna-lake.jpg", info: "A bustling city filled with life and culture." },
    { name: "Tiger Hill", category: "Mountains", img: "assets/images/tiger-hill.jpg", info: "A tranquil mountain getaway with breathtaking views." },
    { name: "Yelagiri", category: "Wildlife", img: "assets/images/YELAGIRI.jpg", info: "An exhilarating safari experience." },
    { name: "Sunset Point", category: "Cultural", img: "assets/images/sunset point.jpg", info: "Experience rich cultures and traditions." },
    { name: "The financial Capital Mumbai", category: "Cities", img: "assets/images/mumbai.jpg", info: "A bustling city filled with life and culture." },
    { name: "Hyderabad", category: "Cities", img: "assets/images/hyderabad.jpg", info: "A bustling city filled with life and culture." },
    { name: "Gulmarg", category: "Adventure", img: "assets/images/GULMARG.jpg", info: "An exciting trek through rugged landscapes." },
    { name: "Spiti", category: "Adventure", img: "assets/images/SPITI.jpg", info: "An exciting trek through rugged landscapes." },
    { name: "Ambey Valley Lonavala", category: "Adventure", img: "assets/images/amby valley.jpg", info: "An exciting trek through rugged landscapes." },
    { name: "Verkila", category: "Adventure", img: "assets/images/VARKALA.jpg", info: "An exciting trek through rugged landscapes." },
    { name: "The Ridge Shimla", category: "Adventure", img: "assets/images/marine-drive.jpg", info: "An exciting trek through rugged landscapes." },
    { name: "Basantnagar Beach", category: "Beaches", img: "assets/images/radhanagar-beach.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Radhanagar Beach", category: "Beaches", img: "assets/images/radhanagar-beach.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Kala Pathar Beach", category: "Beaches", img: "assets/images/kala pathar.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Bangalore", category: "Cities", img: "assets/images/bengaluru.jpg", info: "A bustling city filled with life and culture." },
    { name: "Lake Pichola Udaipur", category: "Romantic", img: "assets/images/lakepichola.jpg", info: "A perfect romantic escape in a beautiful setting." },
    { name: "Lal Tibba Scenic point Musoorie", category: "Romantic", img: "assets/images/lal tibba.jpg", info: "A perfect romantic escape in a beautiful setting." },
    { name: "Fennica Riverside Goa", category: "Romantic", img: "assets/images/fennicariverside.jpg", info: "A perfect romantic escape in a beautiful setting." },
    { name: "Gir Nationmal Park Gujarat", category: "Wildlife", img: "assets/images/gir.jpeg", info: "A perfect romantic escape in a beautiful setting." },
    { name: "Kaziranga National Park", category: "Wildlife", img: "assets/images/kaziranga.jpeg", info: "A perfect romantic escape in a beautiful setting." },
    { name: "Prem Mandir vrindavan", category: "temple", img: "assets/images/lightings-at-prem-mandir.jpg", info: "A stunning beach with golden sand and crystal clear water." },
    { name: "Lakshadweep Island", category: "Islands", img: "assets/images/lakshdweep.jpeg", info: "A beautiful tropical paradise." },
    { name: "Mount Everest", category: "Mountains", img: "assets/images/mount everest.jpeg", info: "A tranquil mountain getaway with breathtaking views." },
    { name: "Rohtang", category: "Mountains", img: "assets/images/rohtang.jpg", info: "A tranquil mountain getaway with breathtaking views." },
    { name: "Kasauli", category: "Mountains", img: "assets/images/kasauli.jpg", info: "A tranquil mountain getaway with breathtaking views." },
    { name: "Kedaranath", category: "Mountains", img: "assets/images/kedarnath.jpg", info: "A tranquil mountain getaway with breathtaking views." },
    { name: "Dharmashala", category: "Mountains", img: "assets/images/dharamsala.jpg", info: "A tranquil mountain getaway with breathtaking views." },
    { name: "Khardung La", category: "Desert", img: "assets/images/khardungla-pass.jpg", info: "A tranquil mountain getaway with breathtaking views." },
    { name: "Nubra Valley", category: "Desert", img: "assets/images/nubra-valley.jpg", info: "A tranquil mountain getaway with breathtaking views." },
    { name: "confluence of Indus", category: "Desert", img: "assets/images/photo0jpg.jpg", info: "A tranquil mountain getaway with breathtaking views." },
    { name: "Sand Dunes", category: "Desert", img: "assets/images/rohtang.jpg", info: "A tranquil mountain getaway with breathtaking views." },

];

const favorites = [];
const destinationsGrid = document.getElementById('destinationsGrid');
const favoritesPanel = document.getElementById('favoritesPanel');
const favoritesList = document.getElementById('favoritesList');
const favoritesCount = document.querySelector('.favorites-count');
const themeToggle = document.getElementById('themeToggle');
const feedbackForm = document.getElementById('form');

function renderDestinations(category = 'all') {
    destinationsGrid.innerHTML = '';

    const filteredDestinations = category === 'all' ? destinations : destinations.filter(dest => dest.category === category);

    filteredDestinations.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <div class="destination-img">
                <img src="${destination.img}" alt="${destination.name}" />
            </div>
            <div class="card-content">
                <h3 class="destination-name">${destination.name}</h3>
                <p class="destination-info">${destination.info}</p>
                <button class="add-favorites-btn" data-name="${destination.name}">Add to Favorites</button>
            </div>
        `;
        destinationsGrid.appendChild(card);
    });

    // Add event listeners to the "Add to Favorites" buttons
    const addFavoritesButtons = document.querySelectorAll('.add-favorites-btn');
    addFavoritesButtons.forEach(button => {
        button.addEventListener('click', addToFavorites);
    });
}

function addToFavorites(event) {
    const name = event.currentTarget.getAttribute('data-name');
    const destination = destinations.find(dest => dest.name === name);

    if (!favorites.includes(destination)) {
        favorites.push(destination);
        updateFavoritesPanel();
        alert(`${destination.name} has been added to favorites!`);
    } else {
        alert(`${destination.name} is already in your favorites.`);
    }
}

function updateFavoritesPanel() {
    favoritesCount.innerText = favorites.length;
    favoritesList.innerHTML = '';
    favorites.forEach(destination => {
        const item = document.createElement('div');
        item.innerText = destination.name;
        favoritesList.appendChild(item);
    });
}

document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        document.querySelector('.category-btn.active').classList.remove('active');
        event.currentTarget.classList.add('active');
        renderDestinations(event.currentTarget.getAttribute('data-category'));
    });
});

document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        document.querySelector('.view-btn.active').classList.remove('active');
        event.currentTarget.classList.add('active');
        const view = event.currentTarget.getAttribute('data-view');
        destinationsGrid.classList.toggle('list-view', view === 'list');
    });
});

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
});

favoritesPanel.addEventListener('click', (event) => {
    if (event.target === favoritesPanel) {
        favoritesPanel.classList.remove('active');
    }
});

document.getElementById('favoritesBtn').addEventListener('click', () => {
    favoritesPanel.classList.toggle('active');
});

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for your feedback!');
    feedbackForm.reset();
});

// Initial render
renderDestinations();
// Add event listeners for tracking clicks (optional)
document.querySelectorAll('.offer-card a').forEach(card => {
    card.addEventListener('click', function() {
        console.log('Offer clicked: ', this.href);
        // Optionally, track user clicks or perform actions
    });
});
document.getElementById('searchBtn').addEventListener('click', function() {
    // Get values from form inputs
    const destination = document.getElementById('destinationSelect').value;
    const checkinDate = document.getElementById('checkin-date').value;
    const checkoutDate = document.getElementById('checkout-date').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const choice = document.getElementById('choice').value;

    // Check if all necessary fields are filled
    if (!destination || !checkinDate || !checkoutDate || !adults) {
        alert('Please fill in all required fields.');
        return;
    }

    // Perform the search action (you can replace this with actual logic to filter/search)
    alert(`Searching for ${destination} from ${checkinDate} to ${checkoutDate} for ${adults} adults and ${children} children. Additional choice: ${choice}`);
    
    // Optionally, clear the form after search
    clearForm();
});

// Function to clear form after search
function clearForm() {
    document.getElementById('destinationSelect').value = '';
    document.getElementById('checkin-date').value = '';
    document.getElementById('checkout-date').value = '';
    document.getElementById('adults').value = '';
    document.getElementById('children').value = '';
    document.getElementById('choice').value = '';
}
