// Initialize Variables for Navbar
let navbar = document.querySelector('.header .navbar')

// Handle Navbar Toggle
document.querySelector('#menu').onclick = () => {
  navbar.classList.add('active');
}

document.querySelector('#close').onclick = () => {
  navbar.classList.remove('active');
}

// Mouse Move Effect
document.addEventListener('mousemove', move);
function move(e) {
  this.querySelectorAll('.move').forEach(layer => {
    const speed = layer.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX * speed) / 120
    const y = (window.innerWidth - e.pageY * speed) / 120
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

// Smooth Scroll to Sections
document.querySelectorAll('.nav_item').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// GSAP Animations
gsap.from('.logo', {opacity: 0, duration: 1, delay: 2, y: 10})
gsap.from('.navbar .nav_item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2})
gsap.from('.title', {opacity: 0, duration: 1, delay: 1.6, y: 30})
gsap.from('.description', {opacity: 0, duration: 1, delay: 1.8, y: 30})
gsap.from('.btn', {opacity: 0, duration: 1, delay: 2.1, y: 30})
gsap.from('.image', {opacity: 0, duration: 1, delay: 2.6, y: 30})


// GSAP Animations for About and Menu Sections
gsap.from('.about .section-title', {opacity: 0, duration: 1, delay: 0.5, y: 30})
gsap.from('.about .section-description', {opacity: 0, duration: 1, delay: 0.7, y: 30})
gsap.from('.about .background img', {opacity: 0, duration: 1, delay: 0.9, y: 30})

gsap.from('.menu .section-title', {opacity: 0, duration: 1, delay: 0.5, y: 30})
gsap.from('.menu .menu-item', {opacity: 0, duration: 1, delay: 0.7, y: 30, stagger: 0.2})
gsap.from('.menu .background img', {opacity: 0, duration: 1, delay: 0.9, y: 30})

// GSAP Animations for Contact Section
gsap.from('.contact .section-title', {opacity: 0, duration: 1, delay: 0.5, y: 30})
gsap.from('.contact form', {opacity: 0, duration: 1, delay: 0.7, y: 30})

// Handle Smooth Scrolling for "Get Started" Button
document.querySelector('.home .btn').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});
