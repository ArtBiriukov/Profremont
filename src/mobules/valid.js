import checkInputs from "./checkInputs";
import rebildInputs from "./rebildInputs";
import maskPhone from './mask-phone';

const calcTotal = document.querySelector('input[name="calc-total"]');

const valid = () => {
  //СОЗДАНИЕ СООБЩЕНИЯ
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 2rem;
  `;

  //запрос на сервер
  const postData = body => fetch('./server.php', {
    method: "POST",
    headers: {
      'contant-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  //отчистка input
  const clearInputs = inputs => {

    inputs.forEach(item => {
      if (item.name !== 'page' && item.name !== 'subject') {
        item.value = '';
        item.classList.remove('success');
        item.classList.remove('error');
      }
    });
  };

  //убирать сообшение
  const closeMessage = (targetForm, targetInputs) => {
    targetForm.style.filter = 'none';

    const targetBtn = targetForm.querySelector('button');

    targetInputs.forEach(input => {
      input.removeAttribute('disabled');
    });
    targetBtn.removeAttribute('disabled');

    const headerModal = document.querySelector('.header-modal'),
      servicesModal = document.querySelector('.services-modal'),
      overlay = document.querySelector('.overlay'),
      scrollBtn = document.querySelector('.smooth-scroll');

    if (targetForm.name === 'callback-form') {
      headerModal.classList.toggle('active-menu');
      overlay.classList.toggle('active-menu');
      scrollBtn.classList.toggle('active-zindex');
      statusMessage.remove();
    }

    if (targetForm.name === 'application-form') {
      servicesModal.classList.toggle('active-menu');
      overlay.classList.toggle('active-menu');
      scrollBtn.classList.toggle('active-zindex');
      statusMessage.remove();
    }

    statusMessage.remove();
  };

  //ЗАГРУЗКА (СПИНЕР)
  const loadMessage = (formBody, formInputs) => {

    const formBtn = formBody.querySelector('button');

    formInputs.forEach(input => {
      input.setAttribute('disabled', 'disabled');
    });
    formBtn.setAttribute('disabled', 'disabled');


    formBody.style.filter = 'blur(1px)';

    statusMessage.innerHTML = `
        <div class="status-messag">
          <?xml version="1.0" encoding="utf-8"?>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <g transform="rotate(0 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(30 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(60 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(90 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(120 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(150 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(180 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(210 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(240 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(270 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(300 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(330 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7175fe">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
            </rect>
          </g>
          </svg>
        </div>`;
  };

  //СООБЩЕНИЕ УСПЕШНО ПОЛУЧЕННО
  const successMessage = () => {
    statusMessage.innerHTML = `
        <div class="status-messag status-messag__succes">
          <img class="status-messag__img" src="images/check.png" alt="Check">
          <span class="status-messag__text" >Ваши данные у нас ))<span>
        </div>`;
  };

  //СООБЩЕНИЕ ОБ ОШИБКИ
  const errorMessage = () => {
    statusMessage.innerHTML = `
        <div class="status-messag status-messag__error">
          <img class="status-messag__img" src="images/close.png" alt="Bad">
          <span class="status-messag__text" >Произошла ошибка<span>
        </div>`;
  };

  //работа по формам
  const workForm = formName => {
    const form = document.querySelector(`form[name="${formName}"]`),
      inputsForm = form.querySelectorAll('.form-group input');

    //работа с инпутами ВАЛИДАЦИЯ
    inputsForm.forEach(input => {

      input.addEventListener('input', event => {
        checkInputs(event.target);
      });

      input.addEventListener('blur', rebildInputs);
    });

    maskPhone('input[name="phone"]');

    //Отправка данных на сервер
    form.addEventListener('submit', event => {
      event.preventDefault();
      const target = event.target;

      const targetInput = target.querySelectorAll('input');

      const checkInputs = () => {
        let result = true;

        targetInput.forEach(item => {

          if (item.value === '') {
            item.classList.add('error');
            result = false;
            return;
          }

          if (item.classList.contains('error')) {
            result = false;
            return;
          }

        });
        return result;
      };

      if (checkInputs()) {

        target.insertAdjacentElement('beforebegin', statusMessage);

        loadMessage(target, targetInput);

        const formData = new FormData(target);
        const body = {};

        formData.forEach((item, key) => {
          body[key] = item;
        });

        if (calcTotal !== null) {
          if (calcTotal.value) {
            body[`${calcTotal.name}`] = calcTotal.value;
          }
        }

        //Если все гуд
        const successResolve = () => {
          successMessage(target);
          clearInputs(targetInput);
          setTimeout(() => { closeMessage(target, targetInput); }, 3000);
        };

        //Если ошибка
        const errorResolve = () => {
          errorMessage(target);
          clearInputs(targetInput);
          //setTimeout(() => { closeMessage(target, targetInput); }, 3000);
        };

        postData(body)
          .then(response => {
            if (response.status !== 200) {
              throw new Error('status not 200');
            }
            successResolve();
          })
          .catch(error => {
            errorResolve();
            console.log(error);
          });

      }
    });
  };

  workForm('action-form');
  workForm('action-form2');
  workForm('callback-form');
  workForm('application-form');
};

export default valid;
