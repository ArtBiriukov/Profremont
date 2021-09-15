const bigPhoto = () => {
  const section = document.getElementById('documents'),
    overlay = document.querySelector('.overlay'),
    scrollBtn = document.querySelector('.smooth-scroll'),
    photoModal = document.createElement('div');

  const callModal = () => {
    overlay.classList.toggle('active-menu');
    scrollBtn.classList.toggle('active-zindex');
    photoModal.classList.toggle('active-menu');
  };

  const creatPhotoModal = photoUrl => {
    photoModal.classList.add('photo-modal');

    photoModal.innerHTML = `      
    <span class="close__photo">&#10005</span>
    <img class="modal-content" src="${photoUrl}" alt="photo">
    `;

    section.appendChild(photoModal);
  };

  document.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    //callModal
    if (target.closest('.document-overlay')) {
      const bigPhoto = target.closest('.sertificate-document').href;

      creatPhotoModal(bigPhoto);
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
