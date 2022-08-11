const commentGet = () => {
  const commentsItem = document.querySelector('.comments-container');

  fetch('comments.json')
    .then((response) => response.json())
    .then((data) => {
      /*Получаем данные (комментарии)*/
      const comments = data.comments;

      /*Количество комментариев на странице*/
      const commentsOnPage = 3;

      /*Пустой массив для вставки верстки комментариев*/
      let arrComments = [];

      /*Перебираем массив из комментариев*/

      comments.forEach((comment) => {
        /*Если нет картинки то добавляем заглушку*/
        if (!comment.image) {
          comment.image = '../users/placeholder.png';
        }

        /*Разбиение комментариев на различные элементы верстки*/
        if (comment.id === 0 || comment.id === 3) {
          let item = `
          <div class = "row comments-item">
          <div class="col-xs-3 col-sm-2">
            <div class="review-user">
              <img src="images/users/${comment.image}" alt="${comment.id}" class="img-responsive avatar">
            </div>
          </div>
          <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-green review-arrow review-arrow-left">
              <p class="text-normal">${comment.author}</p>
              <p>${comment.comment}</p>
            </div>
          </div>
        </div>`;

          arrComments.push(item);
        } else if (comment.id === 1 || comment.id === 4) {
          let item = `
          <div class = "row comments-item">
          <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-gray review-arrow review-arrow-right">
              <p class="text-normal">${comment.author}</p>
              <p>${comment.comment}</p>
            </div>
          </div>
          <div class="col-xs-3 col-sm-2">
            <div class="review-user">
              <img src="images/users/${comment.image}" alt="${comment.id}" class="img-responsive avatar">
            </div>
          </div>
        </div>`;

          arrComments.push(item);
        } else if (comment.id === 2 || comment.id === 5) {
          let item = `
          <div class = "row comments-item ">
          <div class="col-xs-3 col-sm-2">
            <div class="review-user">
              <img src="images/users/${comment.image}" alt="${comment.id}" class="img-responsive avatar">
            </div>
          </div>
          <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-orange review-arrow review-arrow-left">
              <p class="text-normal">${comment.author}</p>
              <p>${comment.comment}</p>
            </div>
          </div>
        </div> `;

          arrComments.push(item);
        }
      });

      /*спинер перед загрузкой комментариев*/
      commentsItem.innerHTML = `
        <div class="status-messag">
          <?xml version="1.0" encoding="utf-8"?>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <g transform="rotate(0 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(30 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(60 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(90 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(120 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(150 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(180 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(210 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(240 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(270 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(300 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
            </rect>
          </g><g transform="rotate(330 50 50)">
            <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#333333">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
            </rect>
          </g>
          </svg>
        </div>`;

      /*Рендер комментариев*/
      const commentRender = () => {
        /*При каждой итерации отчищается поле и отрисовывается новые комментарии*/
        commentsItem.innerHTML = ``;

        for (let i = 0; i < commentsOnPage; i++) {
          commentsItem.insertAdjacentHTML('beforeend', arrComments[i]);
        }
      };

      /*Функция показа комментариев*/
      const showComment = () => {
        commentRender();

        /*Удаление первого элемента массива*/
        const firstComment = arrComments.shift();
        /*Добавление в конец массива первый удаленный элемент*/
        const lastComment = arrComments.push(firstComment);
      };
      /*Каждые 20 секунд меняются комментарии*/
      setInterval(showComment, 5000);
    })

    .catch((err) => {
      commentsItem.innerHTML = `<div class="comments__loading-error"><h2>Ошибка загрузки данных! ${err}</h2></div>`;
    });
};

export default commentGet;
