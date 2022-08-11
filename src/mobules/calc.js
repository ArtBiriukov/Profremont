const calc = () => {
  const calc = document.getElementById('calc'),
    calcType = document.getElementById('calc-type'),
    calcSquare = document.getElementById('calc-input'),
    calcTypeMaterial = document.getElementById('calc-type-material'),
    calcTotal = document.getElementById('calc-total');

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
  calc.addEventListener('change', (event) => {
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

      /*выподающие сообщение*/
      const createNotification = () => {
        const message = document.createElement('div');
        message.className = 'message-calc';
        message.innerHTML = 'Сначало выберите <b>балкон/лоджия</b>!';

        document.body.appendChild(message);

        const hightMes = message.clientHeight;

        message.style.bottom += `${hightMes - 10}px`;

        setTimeout(() => {
          message.style.bottom = '-100px';

          setTimeout(() => {
            message.remove();
          }, 300);
        }, 3000);
      };

      if (typeValue === '--' && target === calcSquare) {
        const messageEl = document.querySelector('.message-calc');

        if (!messageEl) {
          createNotification();
        }
        return;
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
        const step = (timestamp) => {
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
