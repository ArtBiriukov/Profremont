const modals = () => {
  const headerModal = document.querySelector('.header-modal'),
    servicesModal = document.querySelector('.services-modal'),
    overlay = document.querySelector('.overlay'),
    photoModal = document.querySelector('.photo-modal'),
    contentPhoto = photoModal.querySelector('.modal-content'),
    scrollBtn = document.querySelector('.smooth-scroll');

  const callModal = () => {
    overlay.classList.toggle('active-menu');
    headerModal.classList.toggle('active-menu');
    scrollBtn.classList.toggle('active-zindex');
  };

  const measurementModal = () => {
    overlay.classList.toggle('active-menu');
    servicesModal.classList.toggle('active-menu');
    scrollBtn.classList.toggle('active-zindex');
  };

  const photosModal = () => {
    overlay.classList.toggle('active-menu');
    scrollBtn.classList.toggle('active-zindex');
    photoModal.classList.toggle('active-menu');
  };

  document.addEventListener('click', event => {
    const target = event.target;

    //callModal
    if (target.closest('.header-modal__close') ||
        target.closest('.button')) {
      event.preventDefault();
      callModal();
    }

    //measurementModal
    if (target.closest('.services-modal__close') ||
        target.closest('.service-button')) {
      event.preventDefault();
      measurementModal();
    }

    //photoModal
    if (target.closest('.document-overlay')) {
      event.preventDefault();
      const bigPhoto = target.closest('.sertificate-document').href;

      contentPhoto.src = `${bigPhoto}`;
      photosModal();
    }

    //overlay
    if (target.classList.contains('overlay')) {

      if (headerModal.classList.contains('active-menu')) {
        callModal();
      }

      if (servicesModal.classList.contains('active-menu')) {
        measurementModal();
      }
    }

    if (target.classList.contains('overlay') ||
    target.classList.contains('close__photo') ||
    target.classList.contains('photo-modal')) {
      photosModal();
    }
  });

};

export default modals;
