const photoModals = () => {

  const documentImgs = document.querySelectorAll('.document-inner');
  const serviceImages = document.querySelectorAll('.service-image');

  serviceImages.forEach((serviceImage) => {
    serviceImage.addEventListener('click', function(e) {
      e.preventDefault();

      const images = this.querySelectorAll('a');

      console.log(images);
    })
  })

  documentImgs.forEach(documentImg => {
    documentImg.addEventListener('click', function(e) {
      e.preventDefault();

      const originImg = this.querySelector('a').href;

      console.dir(originImg);
      
    })
  })





}

export default photoModals;