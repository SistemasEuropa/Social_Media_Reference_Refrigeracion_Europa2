document.addEventListener('DOMContentLoaded', () => {
  // ---- NUEVOS IDs (modales) ----
  const locationBtn   = document.getElementById('location-btn');
  const whatsappBtn   = document.getElementById('whatsapp-btn');
  const locationModal = document.getElementById('location-modal');
  const whatsappModal = document.getElementById('whatsapp-modal');
  const closeLocation = document.getElementById('close-location');
  const closeWhatsapp = document.getElementById('close-whatsapp');

  const hasNewUI = locationBtn && whatsappBtn && locationModal && whatsappModal;

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hasNewUI) {
    // Abrir
    locationBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(locationModal);
    });
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(whatsappModal);
    });

    // Cerrar con botón X
    if (closeLocation) closeLocation.addEventListener('click', () => closeModal(locationModal));
    if (closeWhatsapp) closeWhatsapp.addEventListener('click', () => closeModal(whatsappModal));

    // Cerrar clic fuera del contenido
    locationModal.addEventListener('click', (e) => {
      if (e.target === locationModal) closeModal(locationModal);
    });
    whatsappModal.addEventListener('click', (e) => {
      if (e.target === whatsappModal) closeModal(whatsappModal);
    });

    // Cerrar al hacer clic en cualquier enlace dentro del modal
    locationModal.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => closeModal(locationModal));
    });
    whatsappModal.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => closeModal(whatsappModal));
    });

    // Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal(locationModal);
        closeModal(whatsappModal);
      }
    });

    // Quitar clase "loading" si la estás usando en <body class="loading">
    window.addEventListener('load', () => {
      document.body.classList.remove('loading');
    });

    // Animaciones al entrar en viewport (si existen .option-card)
    const cards = document.querySelectorAll('.option-card');
    if ('IntersectionObserver' in window && cards.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

      cards.forEach(card => observer.observe(card));
    }
  } else {
    // Si por alguna razón sigues usando el HTML viejo, aquí podrías reactivar la lógica antigua.
    // Pero como tu CSS nuevo no tiene .hide/.blur, mejor NO mezclar. Mantén solo el HTML/CSS/JS nuevos.
    console.warn('No se encontraron los elementos del UI nuevo. Verifica IDs y que el script esté al final del <body>.');
  }
});
