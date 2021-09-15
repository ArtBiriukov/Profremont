const calc = () => {
  const calc = document.getElementById('calc'),
    calcType = document.getElementById('calc-type'),
    calcSquare = document.getElementById('calc-input'),
    calcTypeMaterial = document.getElementById('calc-type-material'),
    calcTotal = document.getElementById('calc-total'),
    calcMessage = document.querySelector('.message-calc');

  //valid input
  const checkValue = () => {
    calcSquare.value = calcSquare.value.replace(/[а-яёa-z]/gi, '');
  };

  if (!calcSquare) {
    return;
  } else {
    calcSquare.addEventListener('input', checkValue);
  }

  //сам калькулятор
  calc.addEventListener('change', event => {
    const target = event.target;

    let total = '';

    const countSum = () => {
      const typeValue = calcType.options[calcType.selectedIndex].value,
        typeMaterialValue = calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value,
        squareValue = calcSquare.value;

      //если не выбран тип Балкон/Лоджия то отчистить поля
      if (typeValue === '--') {
        calcTotal.value = '';
        calcSquare.value = '';
        calcTypeMaterial.value = '--';
      }

      //выподающие сообщение
      const hightMes = calcMessage.clientHeight;

      const showMessag = () => {
        calcMessage.style.top = `calc(100vh - ${30 + hightMes}px)`;
      };

      const leaveMessag = () => {
        calcMessage.style.top = `calc(100vh + 30px)`;
      };

      if (typeValue === '--' && target === calcSquare) {
        showMessag();
        setInterval(leaveMessag, 2500);
      } else {
        leaveMessag();
      }

      //если поле площадь заполнена и выбран тип тогда считаем
      if (squareValue && typeValue !== '--') {
        //если тип остекления не выбран считаем без него
        if (typeMaterialValue === '--') {
          total = parseInt(squareValue * typeValue);
        } else {
          //иначе с ним
          total = parseInt(squareValue * typeValue * typeMaterialValue);
        }
      }

      //анимация цифр и вывод в итог
      const animateValue = (start, end, duration) => {

        let startTimestamp = null;
        const step = timestamp => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          calcTotal.value = Math.floor(progress * (end + start) + start);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      };

      //проверка на undefind total
      if (total) {
        animateValue(0, total, 1000);
      }

    };

    if (target === calcType || target === calcSquare || target === calcTypeMaterial) {
      countSum();
    }

  });

};

export default calc;
