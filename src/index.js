import scrollTop from './mobules/scrollTop';
import timer from './mobules/timer';

import SliderCarusel from './mobules/SliderCarusel';

import calc from './mobules/calc';
import valid from './mobules/valid';
import modals from './mobules/modals';
import photoModals from './mobules/photoModals';
import workModal from './mobules/worksModal';
import topMenu from './mobules/topMenu';
import commentGet from './mobules/commentGet';

scrollTop('.smooth-scroll', '#offer');
timer('30 September 2023');

/*Slider config */
const sliderBenefitConfig = {
  main: '.benefits-inner',
  wrap: '.benefits-wrap',
  nextBtn: '.benefits__arrow--right',
  prevBtn: '.benefits__arrow--left',

  slidersToShow: 3,
  infinity: true,
  sliderWidthValid: true,
  interval: 4000,

  responsive: [
    {
      breakpoint: 576,
      slidersToShow: 1,
    },
  ],
};

const sliderServiceConfig = {
  main: '.service__content',
  wrap: '.service-wrap',
  nextBtn: '.services__arrow--right',
  prevBtn: '.services__arrow--left',

  slidersToShow: 2,
  infinity: true,

  responsive: [
    {
      breakpoint: 769,
      slidersToShow: 1,
    },
  ],
};

const sliderBenefit = new SliderCarusel(sliderBenefitConfig);
const sliderService = new SliderCarusel(sliderServiceConfig);
sliderService.init();
sliderBenefit.init();

calc();
valid();

/*Modal Window Config */
modals('[href="#callback"]', '.header-modal', '.header-modal__close');
modals('[href="#application"]', '.services-modal', '.services-modal__close');
modals('.document-inner', '.photo-modal', '.photo-modal__close', '.photo-modal__content', '.photo-modal__spiner');

if (document.querySelector('.services-img__modal')) {
  modals('.service-image', '.services-img__modal', '.services-img__close', '.services-img__wrap', '.services-img__spiner');
}

photoModals();
workModal();
topMenu();
commentGet();
