import checkInputs from "./checkInputs";
import rebildInputs from "./rebildInputs";
import maskPhone from './mask-phone';

const valid = () => {

  const errorMessage = 'Что то не то',
    loadMessage = 'Загрузка ...',
    successMessage = 'Ваши данные у нас ))';

  const statusMessage = document.createElement('div');
  statusMessage.classList.add('animate__animated');
  statusMessage.style.cssText = `
    font-size: 2rem;
    background-color: steelblue;
    width: 230px;
    padding: 10px;
    border: 2px solid burlywood;
    border-radius: 25px;
    margin: 10px auto;
  `;

  // const nameInputs = document.querySelectorAll('input[name="fio"]'),
  //   phoneInputs = document.querySelectorAll('input[name="phone"]');

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
      item.value = '';
      item.classList.remove('success');
      item.classList.remove('error');
    });
  };

  //убирать сообшение
  const closeMessage = () => {
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
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

        statusMessage.classList.add('animate__backInRight');
        statusMessage.textContent = loadMessage;

        // loadMessage();

        const formData = new FormData(target);
        const body = {};

        formData.forEach((item, key) => {
          body[key] = item;
        });

        //Если все гуд
        const successResolve = () => {
          statusMessage.style.display = 'block';
          statusMessage.textContent = successMessage;
          clearInputs(targetInput);
          setTimeout(closeMessage, 3000);
        };

        //Если ошибка
        const errorResolve = () => {
          statusMessage.style.display = 'block';
          statusMessage.textContent = errorMessage;
          clearInputs(targetInput);
          setTimeout(closeMessage, 3000);
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
