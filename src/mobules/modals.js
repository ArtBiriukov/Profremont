const modals = () => {
  const headerModal = document.querySelector('.header-modal'),
    servicesModal = document.querySelector('.services-modal'),
    overlay = document.querySelector('.overlay');

  const callModal = () => {
    overlay.classList.toggle('active-menu');
    headerModal.classList.toggle('active-menu');
  };

  const measurementModal = () => {
    overlay.classList.toggle('active-menu');
    servicesModal.classList.toggle('active-menu');
  };

  document.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;

    //callModal
    if (target.closest('.header-modal__close') ||
        target.closest('.button')) {
      callModal();
    }

    //measurementModal
    if (target.closest('.services-modal__close') ||
        target.closest('.service-button')) {
      measurementModal();
    }

    //overlay
    if (target.classList.contains('overlay')) {
      if (headerModal.classList.contains('active-menu')) {
        callModal();
      } else if (servicesModal.classList.contains('active-menu')) {
        measurementModal();
      }
    }
  });

};

export default modals;
