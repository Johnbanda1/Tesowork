// DOM Elements
const header = document.getElementById('header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksArray = document.querySelectorAll('.nav-link');
const statItems = document.querySelectorAll('.stat-item');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.testimonial-prev');
const nextButton = document.querySelector('.testimonial-next');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

// Close mobile menu when clicking on a link
navLinksArray.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navLinks.classList.contains('active') && 
      !e.target.closest('.main-nav') && 
      !e.target.closest('.menu-toggle')) {
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Stats counter animation
function animateStats() {
  const statsSection = document.querySelector('.stats-section');
  const statsSectionTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (statsSectionTop < windowHeight * 0.75) {
    statItems.forEach(item => {
      const targetValue = parseInt(item.getAttribute('data-value'));
      const statNumber = item.querySelector('.stat-number');
      const currentValue = parseInt(statNumber.textContent);
      
      if (currentValue < targetValue) {
        const increment = Math.ceil(targetValue / 50);
        const newValue = Math.min(currentValue + increment, targetValue);
        statNumber.textContent = newValue;
        
        if (newValue < targetValue) {
          requestAnimationFrame(() => animateStats());
        }
      }
    });
  }
}

// Testimonial slider
let currentSlide = 0;

function showSlide(index) {
  testimonialSlides.forEach((slide, i) => {
    slide.classList.remove('active');
    testimonialDots[i].classList.remove('active');
  });
  
  testimonialSlides[index].classList.add('active');
  testimonialDots[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % testimonialSlides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
  showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

testimonialDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Auto-rotate testimonials
let testimonialInterval = setInterval(nextSlide, 5000);

// Pause auto-rotation when user interacts with testimonials
document.querySelector('.testimonials-slider').addEventListener('mouseenter', () => {
  clearInterval(testimonialInterval);
});

document.querySelector('.testimonials-slider').addEventListener('mouseleave', () => {
  testimonialInterval = setInterval(nextSlide, 5000);
});

// Project filtering
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    button.classList.add('active');
    
    const filterValue = button.getAttribute('data-filter');
    
    projectCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 100);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Form validation and submission
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    let isValid = true;
    const formElements = this.elements;
    
    for (let i = 0; i < formElements.length; i++) {
      if (formElements[i].hasAttribute('required') && !formElements[i].value) {
        isValid = false;
        formElements[i].classList.add('error');
      } else {
        formElements[i].classList.remove('error');
      }
    }
    
    if (isValid) {
      // Here you would normally send the form data to a server
      // For this demo, we'll just show a success message
      this.innerHTML = `
        <div class="form-success">
          <div class="success-icon"></div>
          <h3>Message Sent Successfully!</h3>
          <p>Thank you for contacting us. We'll get back to you shortly.</p>
        </div>
      `;
    }
  });
}

// Intersection Observer for animations
const fadeElements = document.querySelectorAll('.about-content, .mission-box, .service-card, .project-card, .contact-card');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(element => {
  fadeObserver.observe(element);
});

// Initialize animations on load
window.addEventListener('load', () => {
  // Start stats animation when page loads
  window.addEventListener('scroll', animateStats);
  animateStats();
  
  // Add fade-in class to elements in viewport on load
  fadeElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      element.classList.add('fade-in');
    }
  });
});

// Add CSS class for animations
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .fade-in {
      animation: fadeIn 0.8s ease forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .about-content, .mission-box, .service-card, .project-card, .contact-card {
      opacity: 0;
    }
    
    .form-success {
      text-align: center;
      padding: 2rem;
    }
    
    .success-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 1rem;
      background-color: var(--color-success);
      border-radius: 50%;
      position: relative;
    }
    
    .success-icon::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 32px;
      height: 32px;
      background-color: white;
      -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 11.08V12a10 10 0 1 1-5.93-9.14'/%3E%3Cpolyline points='22 4 12 14.01 9 11.01'/%3E%3C/svg%3E") no-repeat 50% 50%;
      mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 11.08V12a10 10 0 1 1-5.93-9.14'/%3E%3Cpolyline points='22 4 12 14.01 9 11.01'/%3E%3C/svg%3E") no-repeat 50% 50%;
    }
  </style>
`);