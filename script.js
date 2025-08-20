// Modal functionality
const locationBtn = document.getElementById('location-btn');
const whatsappBtn = document.getElementById('whatsapp-btn');
const locationModal = document.getElementById('location-modal');
const whatsappModal = document.getElementById('whatsapp-modal');
const closeLocation = document.getElementById('close-location');
const closeWhatsapp = document.getElementById('close-whatsapp');

function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

locationBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(locationModal);
});

whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(whatsappModal);
});

closeLocation.addEventListener('click', () => closeModal(locationModal));
closeWhatsapp.addEventListener('click', () => closeModal(whatsappModal));

// Close modal when clicking outside
locationModal.addEventListener('click', (e) => {
    if (e.target === locationModal) {
        closeModal(locationModal);
    }
});

whatsappModal.addEventListener('click', (e) => {
    if (e.target === whatsappModal) {
        closeModal(whatsappModal);
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal(locationModal);
        closeModal(whatsappModal);
    }
});

// Add loading animation on page load
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.option-card').forEach(card => {
    observer.observe(card);
});
