import checkInputs from "./checkInputs";
import rebildInputs from "./rebildInputs";
import maskPhone from './mask-phone';

const calcTotal = document.querySelector('input[name="calc-total"]');

const valid = () => {

  const errorMessage = 'Что то не то',
    loadMessage = 'Загрузка ...',
    successMessage = 'Ваши данные у нас ))';

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `
    position: relative;
    color: white;
    font-size: 2rem;
    background-color: #4b9a22;
    padding: 10px;
    border: 2px solid #5dd29c;
    border-radius: 20px;
    margin: 10px auto;
    text-align: center;
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
  const closeMessage = (targetModal) => {

    const headerModal = document.querySelector('.header-modal'),
      servicesModal = document.querySelector('.services-modal'),
      overlay = document.querySelector('.overlay'),
      scrollBtn = document.querySelector('.smooth-scroll');

    if (targetModal.name === 'callback-form') {
      headerModal.classList.toggle('active-menu');
      overlay.classList.toggle('active-menu');
      scrollBtn.classList.toggle('active-zindex');
      statusMessage.remove();
    }

    if (targetModal.name === 'application-form') {
      servicesModal.classList.toggle('active-menu');
      overlay.classList.toggle('active-menu');
      scrollBtn.classList.toggle('active-zindex');
      statusMessage.remove();
    }

    statusMessage.remove();
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

    // const loadMessage = () => {
    //   console.log('из функции лойд мессадж');
    // };

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

        target.appendChild(statusMessage);

        statusMessage.textContent = loadMessage;

        // loadMessage();

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
          statusMessage.style.display = 'block';
          statusMessage.textContent = successMessage;
          clearInputs(targetInput);
          setTimeout(() => { closeMessage(target); }, 3000);
        };

        //Если ошибка
        const errorResolve = () => {
          statusMessage.style.display = 'block';
          statusMessage.textContent = errorMessage;
          clearInputs(targetInput);
          setTimeout(() => { closeMessage(target); }, 3000);
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
