const scrollTop = () => {
  const scrollBtn = document.querySelector('.smooth-scroll');
  const benefitsSection = document.querySelector('#benefits');

  const scrolling = () => {
    scrollBtn.addEventListener('click', event => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };

  window.addEventListener('scroll', () => {
    if (benefitsSection.offsetTop < document.documentElement.scrollTop) {
      scrollBtn.classList.add('show-btn');
      scrolling();
    } else {
      scrollBtn.classList.remove('show-btn');
    }
  });

};

export default scrollTop;
