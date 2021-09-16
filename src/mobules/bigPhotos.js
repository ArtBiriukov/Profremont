const bigPhoto = () => {
  const overlay = document.querySelector('.overlay'),
    scrollBtn = document.querySelector('.smooth-scroll'),
    photoModal = document.querySelector('.photo-modal'),
    contentPhoto = photoModal.querySelector('.modal-content');

  const callModal = () => {

    overlay.classList.toggle('active-menu');
    scrollBtn.classList.toggle('active-zindex');
    photoModal.classList.toggle('active-menu');
  };

  document.addEventListener('click', event => {
    const target = event.target;

    //callModal
    if (target.closest('.document-overlay')) {
      event.preventDefault();
      const bigPhoto = target.closest('.sertificate-document').href;

      contentPhoto.src = `${bigPhoto}`;
      callModal();
    }

    //overlay
    if (target.classList.contains('overlay') ||
    target.classList.contains('close__photo') ||
    target.classList.contains('photo-modal')) {
      callModal();
    }
  });
};

export default bigPhoto;
