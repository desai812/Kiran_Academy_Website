// mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// course filter tabs
const tabs = document.querySelectorAll('.course-tabs button');
const cards = document.querySelectorAll('.course-card');
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const filter = tab.dataset.filter;
  cards.forEach(c => c.classList.toggle('hidden', filter !== 'all' && c.dataset.category !== filter));
}));

// reveal-on-scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// demo form submission
const form = document.getElementById('demoForm');
const toast = document.getElementById('toast');
form.addEventListener('submit', e => {
  e.preventDefault();
  toast.classList.add('show');
  form.reset();
  setTimeout(() => toast.classList.remove('show'), 3000);
});
