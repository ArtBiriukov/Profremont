const modalInService = () => {
  const serviceImages = document.querySelectorAll('.service-image'),
    overlay = document.querySelector('.overlay'),
    servicesImgModal = document.querySelector('.services-img-modal'),
    servicesWrap = servicesImgModal.querySelector('.services-img__wrap'),;


  const overlayAndScrollToggle = () => {
    overlay.classList.toggle('active-menu');
  };

  const photosModal = () => {
    overlayAndScrollToggle();
    servicesImgModal.classList.toggle('active-menu');
  };

  serviceImages.forEach(item => {

    item.addEventListener('click', e => {
      e.preventDefault();

      const spanItem = item.querySelector('span');

      if (e.path[0] === spanItem) {
        const imgAll = item.querySelectorAll('a');

        imgAll.forEach((img, ind) => {
          const linkImg = img.pathname;

          const htmlImg = `<img class="services-content__img" src=${linkImg} alt="photo-service-${ind}">`;
          servicesWrap.insertAdjacentHTML('beforeend', htmlImg);

          photosModal();
        });



        //   if (target.closest('.document-overlay')) {
        //     const bigPhoto = target.closest('.sertificate-document').href;

        //     contentPhoto.src = `${bigPhoto}`;
        //     photosModal();
        //   }

        //   //overlay
        //   if (target.classList.contains('overlay')) {

        //     if (target.classList.contains('close__photo') ||
        //     target.classList.contains('active-menu')) {
        //       photosModal();
        //   }





      }

    });
  });

};

export default modalInService;
