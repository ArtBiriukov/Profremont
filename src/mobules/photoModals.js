const photoModals = () => {

  const documentImgs = document.querySelectorAll('.document-inner'),
    photoModalContent = document.querySelector('.photo-modal__content'),
    photoModalImg = document.createElement('img');

  photoModalImg.classList.add('photo-modal__img');

  for (const documentImg of documentImgs) {

    documentImg.addEventListener('click', function (e) {
      e.preventDefault();

      const pathOriginImg = documentImg.querySelector('a').getAttribute('href');

      photoModalImg.setAttribute('src', pathOriginImg);

      photoModalContent.appendChild(photoModalImg);
    })
  }
}

export default photoModals;