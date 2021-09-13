/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mobules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobules/modals */ \"./src/mobules/modals.js\");\n/* harmony import */ var _mobules_scrollTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobules/scrollTop */ \"./src/mobules/scrollTop.js\");\n/* harmony import */ var _mobules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobules/timer */ \"./src/mobules/timer.js\");\n\n\n\n(0,_mobules_modals__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_mobules_scrollTop__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_mobules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('23 September  2021');\n\n//# sourceURL=webpack://glo-final/./src/index.js?");

/***/ }),

/***/ "./src/mobules/modals.js":
/*!*******************************!*\
  !*** ./src/mobules/modals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modals = function modals() {\n  var headerModal = document.querySelector('.header-modal'),\n      servicesModal = document.querySelector('.services-modal'),\n      overlay = document.querySelector('.overlay');\n\n  var callModal = function callModal() {\n    overlay.classList.toggle('active-menu');\n    headerModal.classList.toggle('active-menu');\n  };\n\n  var measurementModal = function measurementModal() {\n    overlay.classList.toggle('active-menu');\n    servicesModal.classList.toggle('active-menu');\n  };\n\n  document.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target; //callModal\n\n    if (target.closest('.header-modal__close') || target.closest('.button')) {\n      callModal();\n    } //measurementModal\n\n\n    if (target.closest('.services-modal__close') || target.closest('.service-button')) {\n      measurementModal();\n    } //overlay\n\n\n    if (target.classList.contains('overlay')) {\n      if (headerModal.classList.contains('active-menu')) {\n        callModal();\n      } else if (servicesModal.classList.contains('active-menu')) {\n        measurementModal();\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);\n\n//# sourceURL=webpack://glo-final/./src/mobules/modals.js?");

/***/ }),

/***/ "./src/mobules/scrollTop.js":
/*!**********************************!*\
  !*** ./src/mobules/scrollTop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrollTop = function scrollTop() {\n  var scrollBtn = document.querySelector('.smooth-scroll');\n  var benefitsSection = document.querySelector('#benefits');\n\n  var scrolling = function scrolling() {\n    scrollBtn.addEventListener('click', function (event) {\n      event.preventDefault();\n      window.scrollTo({\n        top: 0,\n        behavior: 'smooth'\n      });\n    });\n  };\n\n  window.addEventListener('scroll', function () {\n    if (benefitsSection.offsetTop < document.documentElement.scrollTop) {\n      scrollBtn.classList.add('show-btn');\n      scrolling();\n    } else {\n      scrollBtn.classList.remove('show-btn');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollTop);\n\n//# sourceURL=webpack://glo-final/./src/mobules/scrollTop.js?");

/***/ }),

/***/ "./src/mobules/timer.js":
/*!******************************!*\
  !*** ./src/mobules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar timer = function timer(stopAction) {\n  var timerDay = document.querySelectorAll('.count_1'),\n      timerHours = document.querySelectorAll('.count_2'),\n      timerMinutes = document.querySelectorAll('.count_3'),\n      timerSeconds = document.querySelectorAll('.count_4');\n  var idInterval = 0;\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(stopAction).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 3600 % 24),\n        days = Math.floor(timeRemaining / 3600 / 24);\n\n    if (timeRemaining > 0) {\n      return {\n        timeRemaining: timeRemaining,\n        days: days,\n        hours: hours,\n        minutes: minutes,\n        seconds: seconds\n      };\n    } else {\n      return {\n        timeRemaining: 0,\n        days: 0,\n        hours: 0,\n        minutes: 0,\n        seconds: 0\n      };\n    }\n  };\n\n  var checkZero = function checkZero(itemTime) {\n    if (itemTime < 10) {\n      return \"0\".concat(itemTime);\n    } else {\n      return itemTime;\n    }\n  };\n\n  var updateClock = function updateClock() {\n    var _getTimeRemaining = getTimeRemaining(),\n        days = _getTimeRemaining.days,\n        hours = _getTimeRemaining.hours,\n        minutes = _getTimeRemaining.minutes,\n        seconds = _getTimeRemaining.seconds,\n        timeRemaining = _getTimeRemaining.timeRemaining;\n\n    timerDay.forEach(function (dayItme) {\n      var day = dayItme.querySelector('span');\n      day.textContent = checkZero(days);\n    });\n    timerHours.forEach(function (hourItme) {\n      var hour = hourItme.querySelector('span');\n      hour.textContent = checkZero(hours);\n    });\n    timerMinutes.forEach(function (minutItme) {\n      var minut = minutItme.querySelector('span');\n      minut.textContent = checkZero(minutes);\n    });\n    timerSeconds.forEach(function (secondItme) {\n      var second = secondItme.querySelector('span');\n      second.textContent = checkZero(seconds);\n    });\n\n    if (timeRemaining < 0) {\n      clearInterval(idInterval);\n    }\n  };\n\n  updateClock();\n  idInterval = setInterval(updateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://glo-final/./src/mobules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;