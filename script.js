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

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Cek apakah user sudah pernah memilih mode gelap sebelumnya
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.innerText = '☀️ Mode Terang';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.innerText = '☀️ Mode Terang';
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.innerText = '🌙 Mode Gelap';
    }
});