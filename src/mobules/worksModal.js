const workModal = () => {
  const serviceImgs = document.querySelectorAll('.service-image'),
    servicesModalWrap = document.querySelector('.services-img__wrap'),
    spiner = document.querySelector('.services-img__spiner');

  const slider = () => {
    /*переменные слайдера */
    const nextBtn = document.querySelector('.services-img__arrow-right'),
      prevBtn = document.querySelector('.services-img__arrow-left'),
      sliderItems = document.querySelectorAll('.services-img__item');

    let index = 0;

    /*Функции слайдера */
    const takeSize = (item) => {
      const originalHeight = item.firstElementChild.naturalHeight;
      const originalWidth = item.firstElementChild.naturalWidth;

      wraperChangSize(originalHeight, originalWidth);
    };

    const wraperChangSize = (height, width) => {
      if (width > 700 && height > 800) {
        height = height * 0.5;
        width = width * 0.5;
      } else {
        height = height;
        width = width;
      }

      servicesModalWrap.style.height = `${height}px`;
      servicesModalWrap.style.width = `${width}px`;
    };

    const activeSlide = (ind) => {
      for (let sliderItem of sliderItems) {
        sliderItem.classList.remove('active-slide');
      }

      takeSize(sliderItems[ind]);

      sliderItems[ind].classList.add('active-slide');
    };

    //Запуск слайдера убираем спинер и добавляем картинки
    setTimeout(() => {
      spiner.style.display = 'none';
      activeSlide(index);
    }, 1000);

    /*Слушатели */
    nextBtn.addEventListener('click', () => {
      if (index === sliderItems.length - 1) {
        index = 0;
        activeSlide(index);
      } else {
        index++;
        activeSlide(index);
      }
    });

    prevBtn.addEventListener('click', () => {
      if (index == 0) {
        index = sliderItems.length - 1;
        activeSlide(index);
      } else {
        index--;
        activeSlide(index);
      }
    });
  };

  //перебор "кнопок" чтобы получить картинки
  for (let serviceImg of serviceImgs) {
    serviceImg.addEventListener('click', (e) => {
      e.preventDefault();

      const imgs = serviceImg.querySelectorAll('a');

      //Добавление элементов в wrap, а так же добавлнеие картинок
      for (const img of imgs) {
        const pahtOriginImg = img.getAttribute('href'),
          serviceItemEl = document.createElement('div'),
          servicePhotoEl = document.createElement('img');

        serviceItemEl.classList.add('services-img__item');
        servicePhotoEl.setAttribute('src', pahtOriginImg);
        serviceItemEl.appendChild(servicePhotoEl);

        servicesModalWrap.insertAdjacentElement('beforeend', serviceItemEl);
      }

      slider();
    });
  }
};

export default workModal;
