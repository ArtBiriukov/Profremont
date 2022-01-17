const topMenu = () => {

  const navFix = document.getElementById('navigation-fixed'),
  navigationSection = document.querySelector('#navigation'),
  navbarCollapseFixed = document.getElementById('navbar-collapse-fixed'),
  navbarCollapse = document.getElementById('navbar-collapse'),
  menuLinks = navbarCollapseFixed.querySelectorAll('ul>li>a'),
  utpButton = document.querySelector('.utp-button').querySelector('a'),
  aboutButton = document.querySelector('.about-wrap').querySelector('.fancyboxModal');

  const checkClassFixMenu = () => {
    if (navbarCollapseFixed.classList.contains('collapse')){
      navFix.classList.remove('hide-menu');
    } 
  }

  const navFixShow = () => {
    if (navigationSection.offsetTop <= document.documentElement.scrollTop) {
      navFix.classList.add('hide-menu');
    } else {
      checkClassFixMenu();
    }
  }

  const toggelNavbar = (idNavbar) => {

   if (!idNavbar) {

    if (!navbarCollapse.classList.contains('collapse')) {
      navbarCollapse.classList.add('collapse')
    } else if (!navbarCollapseFixed.classList.contains('collapse')) {
      navbarCollapseFixed.classList.add('collapse')
    }

   } else {
    document.querySelector(idNavbar).classList.toggle('collapse');
   }   
  };

  const scrollSlow = event => {

    event.preventDefault();

    toggelNavbar();

    const itemHash = event.currentTarget.getAttribute('href');

    document.querySelector(`${itemHash}`).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  navFixShow();

  //Клики по кнопкам менюшек
  document.addEventListener('click', event => {
    const target = event.target;

      if (target.closest('.icon-bar') || target.closest('.navbar-toggle')) {
        event.preventDefault();

        if (!target.dataset.target) {
          toggelNavbar(target.parentElement.dataset.target);
          navFixShow();
        } else {
          toggelNavbar(target.dataset.target);
          navFixShow();
        }

      } else {

        if (!target.closest('#navigation-fixed') && !navbarCollapseFixed.classList.contains('collapse') || 
        !target.closest('#navigation') && !navbarCollapse.classList.contains('collapse')) {
          toggelNavbar();
          navFixShow();
        }
      }      
  });

  //Скрол для фиксированого меню
  window.addEventListener('scroll', () => navFixShow());

  // Плавный скрол по странице
  menuLinks.forEach(link => {
    link.addEventListener('click', scrollSlow);
  });

  utpButton.addEventListener('click', scrollSlow);
  aboutButton.addEventListener('click', scrollSlow);
};

export default topMenu;