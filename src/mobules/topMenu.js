const topMenu = () => {

  const navFix = document.querySelector('#navigation-fixed');
  const navigationSection = document.querySelector('#navigation');



  window.addEventListener('scroll', () => {
    
    if (navigationSection.offsetTop <= document.documentElement.scrollTop) {
      navFix.classList.add('hide-menu');
    }else {
      navFix.classList.remove('hide-menu');
    }
  });

};

export default topMenu;