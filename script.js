// Header Scroll Effect
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Reveal Animation on Scroll Observer
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // Berhenti mengamati elemen setelah muncul agar animasi tidak berulang terus
      revealObserver.unobserve(entry.target);
    }
  });
}, { 
  threshold: 0.15, 
  rootMargin: "0px 0px -50px 0px" 
});

reveals.forEach((element) => revealObserver.observe(element));