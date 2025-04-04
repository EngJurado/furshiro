// Theme management
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Function to set the theme
function setTheme(theme) {
    body.dataset.theme = theme;
    themeSwitch.textContent = theme === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('theme', theme);
}

// Get saved theme or use system preference
const savedTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
setTheme(savedTheme);

// Toggle theme on button click
themeSwitch.addEventListener('click', () => {
    const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Scroll Message
document.addEventListener('DOMContentLoaded', () => {
    class ScrollMessage {
        constructor() {
            this.message = document.querySelector('.scroll-message');
            this.setupEventListeners();
        }

        setupEventListeners() {
            if (!this.message) return;

            // Show message immediately
            this.message.classList.add('visible');

            // Hide on first scroll
            const hideOnScroll = () => {
                this.message.classList.remove('visible');
                window.removeEventListener('scroll', hideOnScroll);
            };

            window.addEventListener('scroll', hideOnScroll);
        }
    }

    new ScrollMessage();

    // Handle artwork modal
    const artworkModal = document.getElementById('artworkModal');
    if (artworkModal) {
        const modal = new bootstrap.Modal(artworkModal);
        
        artworkModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget;
            const modalImage = artworkModal.querySelector('#modalImage');
            const artistLink = artworkModal.querySelector('.artist-link');
            const dateSpan = artworkModal.querySelector('.date');

            // Update image
            modalImage.src = button.querySelector('img').src;
            modalImage.alt = button.querySelector('img').alt;

            // Update artist link and text
            const artist = button.dataset.artist;
            const artistUrl = button.dataset.artistUrl;
            artistLink.href = artistUrl;
            artistLink.textContent = `by ${artist}`;

            // Update date
            dateSpan.textContent = button.dataset.date;
        });

        // Close modal when clicking anywhere
        artworkModal.addEventListener('click', () => {
            modal.hide();
        });
    }

    // Handle lazy loading of images
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});