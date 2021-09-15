const sliders = () => {

  class SliderCarusel {
    constructor({
      main,
      wrap,
      nextBtn,
      prevBtn,
      position = 0,
      slidersToShow = 3,
      infinity = true,
      responsive = [],
    }) {
      //контент
      this.main = document.querySelector(main);
      //обертка вокруг слайдов
      this.wrap = document.querySelector(wrap);
      //слайды
      this.slides = document.querySelector(wrap).children;
      //кнопки
      this.nextBtn = document.querySelector(nextBtn);
      this.prevBtn = document.querySelector(prevBtn);
      //количество слайдов
      this.slidersToShow = slidersToShow;

      //опции
      this.options = {
        position,
        infinity,
        sliderWidth: parseInt(this.main.clientWidth / this.slidersToShow),
        maxPosition: this.slides.length - this.slidersToShow
      };
      this.responsive = responsive;

    }

    init() {
      this.addClass();
      this.addStyle();
      this.controlSlider();

      if (this.responsive) {
        this.responseInit();
      }

    }

    addClass() {
      this.main.classList.add('vi__slider');
      this.wrap.classList.add('vi__slider-wrap');
      for (const item of this.slides) {
        item.classList.add('vi__slider-item');
      }
    }

    addStyle() {
      let style = document.getElementById('slidersCorusel-style');

      if (!style) {
        style = document.createElement('style');
        style.id = 'slidersCorusel-style';
      }

      style.textContent = `
        .vi__slider-item {         
          min-width: ${this.options.sliderWidth}px;
        }
      `;
      document.head.appendChild(style);
    }

    controlSlider() {
      this.prevBtn.addEventListener('click', this.prevSlider.bind(this));
      this.nextBtn.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
      if (this.options.infinity || this.options.position > 0) {
        --this.options.position;
        if (this.options.position < 0) {
          this.options.position = this.options.maxPosition;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.sliderWidth}px)`;
      }

    }

    nextSlider() {
      if (this.options.infinity || this.options.position < this.options.maxPosition) {
        ++this.options.position;

        if (this.options.position > this.options.maxPosition) {
          this.options.position = 0;
        }

        this.wrap.style.transform = `translateX(-${this.options.position * this.options.sliderWidth}px)`;
      }
    }

    responseInit() {
      const slidersToShowOnStart =  this.slidersToShow;
      const allResponse = this.responsive.map(item => item.breakpoint);
      const maxResponse = Math.max(...allResponse);

      const cheangStyle = () => {
        this.options.sliderWidth = parseInt(this.main.clientWidth / this.slidersToShow);
        this.addStyle();
      };

      const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < maxResponse) {
          for (let i = 0; i < allResponse.length; i++) {

            if (widthWindow < allResponse[i]) {
              this.slidersToShow = this.responsive[i].slidersToShow;
              cheangStyle();
            }

          }
        } else {
          this.slidersToShow = slidersToShowOnStart;
          cheangStyle();
        }
      };

      checkResponse();
      window.addEventListener('resize', checkResponse);
    }

  }

  const sliderBenefit = {
    main: '.benefits-inner',
    wrap: '.benefits-wrap',
    nextBtn: '.benefits__arrow--right',
    prevBtn: '.benefits__arrow--left',

    slidersToShow: 3,
    infinity: true,

    responsive: [{
      breakpoint: 1024,
      slidersToShow: 3
    },
    {
      breakpoint: 576,
      slidersToShow: 1
    }]
  };

  const slider = new SliderCarusel(sliderBenefit);
  slider.init();

};

export default sliders;

