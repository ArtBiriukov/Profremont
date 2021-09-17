const regExpName = /^[а-яёa-z]{2,}$/i,
  regExpPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;


const checkInputs = target => {

  const checkGood = () => {
    target.classList.add('success');
    target.classList.remove('error');
  };

  const checkBed = () => {
    target.classList.add('error');
    target.classList.remove('success');
  };

  if (target.name === 'fio') {
    target.value = target.value.replace(/[\s\d!\@\#\$\%\^\&\*\(\)\_\-\=\+\?\>\<\.\|\\/\"№\;\:]*/gi, '');
    if (regExpName.test(target.value)) {
      checkGood();
    } else {
      checkBed();
    }
  }

  if (target.name === 'phone') {
    target.value = target.value.replace(/[^\d\+\-\s\(\)]+/g, '');
    if (regExpPhone.test(target.value)) {
      checkGood();
    } else {
      checkBed();
    }
  }

};

export default checkInputs;
