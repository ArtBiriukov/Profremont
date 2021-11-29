const modals = () => {
  const headerModal = document.querySelector('.header-modal'),
    servicesModal = document.querySelector('.services-modal'),
    overlay = document.querySelector('.overlay'),
    photoModal = document.querySelector('.photo-modal'),
    contentPhoto = photoModal.querySelector('.modal-content'),
    clouseBtn = photoModal.querySelector('.fancybox-close');

  const overlayAndScrollToggle = () => {
    overlay.classList.toggle('active-menu');
  };

  const callModal = () => {
    overlayAndScrollToggle();
    headerModal.classList.toggle('active-menu');
  };

  const measurementModal = () => {
    overlayAndScrollToggle();
    servicesModal.classList.toggle('active-menu');
  };

  const photosModal = () => {
    overlayAndScrollToggle();
    photoModal.classList.toggle('active-menu');
  };

  document.addEventListener('click', event => {
    const target = event.target;

    if (target.hash === '#callback' || target.closest('.header-modal__close') ) {
      event.preventDefault();
      callModal();
    } else if (target.hash === '#application' || target.closest('.services-modal__close')) {
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

    if (target.classList.contains('fancybox-close') || target.classList.contains('active-menu')) {
      photosModal();
    }
  });

  // const clouseItem = () => {
  //   clouseBtn.classList.toggle('opacity__btn');
  // };

  // contentPhoto.addEventListener('mouseover', () => {
  //   clouseItem();
  // });

  // contentPhoto.addEventListener('mouseleave', () => {
  //   clouseItem();
  // });

};

export default modals;
