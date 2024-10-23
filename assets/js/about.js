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

navTogglers.forEach(toggler => {
  toggler.addEventListener("click", toggleNav);
});

/** 
 * Header behavior on scroll
*/
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

// Counter Animation
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // Animation speed - lower is faster

  const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      
      const updateCount = () => {
          const increment = target / speed;
          
          if (count < target) {
              count += increment;
              counter.innerText = Math.ceil(count);
              setTimeout(updateCount, 1);
          } else {
              counter.innerText = target;
          }
      };

      updateCount();
  };

  // Start animation when element is in viewport
  const observerOptions = {
      threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
});

const timelineData = [
  {
      image: "assets/images/1.jpeg",
      date: "January 2020",
      description: "Travelia opens its doors in Mumbai, offering personalized travel experiences to adventure seekers."
  },
  {
      image: "assets/images/2.jpeg",
      date: "March 2020",
      description: "Launched our first digital booking platform, connecting travelers with local experiences."
  },
  {
      image: "assets/images/3.jpeg",
      date: "August 2021",
      description: "Expanded services to include luxury hotel partnerships across Southeast Asia."
  },
  {
      image: "assets/images/4.jpeg",
      date: "October 2021",
      description: "Introduced our signature 'Cultural Immersion' tour packages."
  },
  {
      image: "assets/images/5.jpeg",
      date: "February 2022",
      description: "Reached milestone of serving 10,000+ happy travelers."
  },
  {
      image: "assets/images/6.jpeg",
      date: "June 2022",
      description: "Launched innovative flight booking system with price prediction."
  },
  {
      image: "assets/images/7.jpeg",
      date: "December 2022",
      description: "Opened new offices in Delhi and Bangalore to serve growing customer base."
  },
  {
      image: "assets/images/8.jpeg",
      date: "March 2023",
      description: "Introduced eco-friendly travel initiatives and sustainable tourism packages."
  }
];

// DOM Elements
const timelineScroll = document.getElementById('timelineScroll');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');
const yearSelect = document.getElementById('yearSelect');

// Initialize timeline
function initializeTimeline() {
  timelineData.forEach(item => {
      const timelineItem = `
          <div class="timeline-item" data-date="${item.date}">
              <img src="${item.image}" alt="Timeline event">
              <div class="timeline-content">
                  <div class="timeline-date">${item.date}</div>
                  <div class="timeline-description">${item.description}</div>
              </div>
          </div>
      `;
      timelineScroll.insertAdjacentHTML('beforeend', timelineItem);
  });
  updateScrollButtons();
}

// Scroll functionality
function scrollTimeline(direction) {
  const scrollAmount = timelineScroll.offsetWidth * 0.75; // Scroll 75% of container width
  const currentScroll = timelineScroll.scrollLeft;
  
  if (direction === 'left') {
      timelineScroll.scrollTo({
          left: currentScroll - scrollAmount,
          behavior: 'smooth'
      });
  } else {
      timelineScroll.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: 'smooth'
      });
  }
}

// Update scroll buttons state
function updateScrollButtons() {
  const isAtStart = timelineScroll.scrollLeft === 0;
  const isAtEnd = timelineScroll.scrollLeft >= (timelineScroll.scrollWidth - timelineScroll.offsetWidth);
  
  scrollLeftBtn.disabled = isAtStart;
  scrollRightBtn.disabled = isAtEnd;
}

// Event Listeners
scrollLeftBtn.addEventListener('click', () => scrollTimeline('left'));
scrollRightBtn.addEventListener('click', () => scrollTimeline('right'));
timelineScroll.addEventListener('scroll', updateScrollButtons);

// Year selection functionality
yearSelect.addEventListener('change', (e) => {
  const year = e.target.value;
  const items = timelineScroll.getElementsByClassName('timeline-item');
  
  for (let item of items) {
      if (item.dataset.date.includes(year)) {
          const scrollPosition = item.offsetLeft - timelineScroll.offsetLeft;
          timelineScroll.scrollTo({
              left: scrollPosition,
              behavior: 'smooth'
          });
          break;
      }
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeTimeline);

// Update scroll buttons on window resize
window.addEventListener('resize', updateScrollButtons);
