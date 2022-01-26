const scrollTop = () => {
  const scrollBtn = document.querySelector('.smooth-scroll');
  const benefitsSection = document.querySelector('#benefits');

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrolling = () => {
    scrollBtn.addEventListener('click', event => {
      const eventCount = event.detail;
      event.preventDefault();
      if (eventCount === 1) {
        scrollTop();
      }
      return;
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