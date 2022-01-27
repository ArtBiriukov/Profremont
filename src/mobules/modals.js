const modals = (selectorTriger, selectorModal, selectorClose, selectorWrap, spiner) => {

  const trigerBtns = document.querySelectorAll(selectorTriger),
    modal = document.querySelector(selectorModal),
    overlay = document.querySelector('.overlay'),
    wrapContent = document.querySelector(selectorWrap),
    modalSpiner = document.querySelector(spiner),
    closeBtn = document.querySelector(selectorClose);

  console.log(closeBtn);


  trigerBtns.forEach(trigerBtn => {

    trigerBtn.addEventListener("click", (e) => {

      if (e.triger) {
        e.preventDefault();
      }

      if (modalSpiner) {
        modalSpiner.style.display = "none";
      }

      modal.style.display = "block";
      overlay.style.display = "block"
    })
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";



    if (wrapContent) {
      modalSpiner.style.display = "block";
      wrapContent.style.cssText = `width: auto; height: auto;`;
      wrapContent.innerHTML = '';
    }
  })

  overlay.addEventListener("click", (e) => {

    if (e.target === overlay) {
      modal.style.display = "none";
      overlay.style.display = "none";

      if (wrapContent) {
        modalSpiner.style.display = "block";
        wrapContent.style.cssText = `width: auto; height: auto;`;
        wrapContent.innerHTML = '';
      }
    }
  })
};

export default modals;