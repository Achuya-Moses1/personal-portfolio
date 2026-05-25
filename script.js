
// Simple JS for Personal Portfolio
document.addEventListener('DOMContentLoaded', () => {
	// Mobile nav toggle (button with id "nav-toggle" and nav with id "nav")
	const navToggle = document.getElementById('nav-toggle');
	const nav = document.getElementById('nav');
	if (navToggle && nav) {
		navToggle.addEventListener('click', () => {
			nav.classList.toggle('open');
			navToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
		});
	}

	// Smooth scrolling for internal links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const targetId = this.getAttribute('href').slice(1);
			const target = document.getElementById(targetId);
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});

	// Simple reveal on scroll for elements with class "reveal"
	const revealElems = document.querySelectorAll('.reveal');
	const revealObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				revealObserver.unobserve(entry.target);
			}
		});
	}, { threshold: 0.15 });
	revealElems.forEach(el => revealObserver.observe(el));

	// Basic contact form validation (form id "contact-form")
	const form = document.getElementById('contact-form');
	if (form) {
		form.addEventListener('submit', (e) => {
			const name = form.querySelector('input[name="name"]');
			const email = form.querySelector('input[name="email"]');
			const message = form.querySelector('textarea[name="message"]');
			if (!name.value.trim() || !email.value.includes('@') || !message.value.trim()) {
				e.preventDefault();
				alert('Please fill out name, a valid email, and a message.');
			}
		});
	}
});

// Utility: simple dark mode toggle if button with id "theme-toggle" exists
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) themeToggle.addEventListener('click', () => {
	document.documentElement.classList.toggle('dark');
	const isDark = document.documentElement.classList.contains('dark');
	themeToggle.setAttribute('aria-pressed', isDark);
});
