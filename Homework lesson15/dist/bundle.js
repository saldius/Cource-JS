/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function(){\r\n\r\n'use strict';\r\n\t\r\n\tlet timer = __webpack_require__(/*! ./parts/timer.js */ \"./src/parts/timer.js\"),\r\n\t\tform = __webpack_require__(/*! ./parts/form.js */ \"./src/parts/form.js\"),\r\n\t\tmodal = __webpack_require__(/*! ./parts/modal.js */ \"./src/parts/modal.js\"),\r\n\t\tslider = __webpack_require__(/*! ./parts/slider.js */ \"./src/parts/slider.js\"),\r\n\t\tcalc = __webpack_require__(/*! ./parts/calc.js */ \"./src/parts/calc.js\"),\r\n\t\ttabs = __webpack_require__(/*! ./parts/tabs.js */ \"./src/parts/tabs.js\");\r\n\r\ntabs();\r\ncalc();\r\ntimer();\r\nform();\r\nmodal();\r\nslider();\r\n\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function calc() {\r\n\tlet persons = document.querySelectorAll('.counter-block-input')[0],\r\n      restDays = document.querySelectorAll('.counter-block-input')[1],\r\n      place = document.getElementById('select'),                       \r\n      totalValue = document.getElementById('total'),                   \r\n      personsSum = 0,                                                  \r\n      daysSum=0,                                                       \r\n      total = 0;                                                       \r\n      totalValue.innerHTML = 0;\r\n     \r\n      persons.addEventListener('input', function() {\r\n      persons.value = persons.value.replace(/[^\\d]/g,'');\r\n\r\n    });\r\n      persons.addEventListener('change', function () { \r\n        personsSum = +this.value;                      \r\n                                                      \r\n        total = (daysSum + personsSum)*4000;\r\n          if (restDays.value == '' || persons.value == ''|| persons.value == '0' || restDays.value == '0'){\r\n            totalValue.innerHTML = 0;\r\n          } else {\r\n            let a = total;\r\n            totalValue.innerHTML = a * place.options[place.selectedIndex].value;\r\n          }\r\n      });\r\n\r\n      restDays.addEventListener('input', function() {\r\n      restDays.value = restDays.value.replace(/[^\\d]/g,'');\r\n      });\r\n\r\n      restDays.addEventListener('change', function(){\r\n         daysSum = +this.value;\r\n        total = (daysSum + personsSum)*4000;\r\n         if(persons.value == '' || restDays.value == '' || persons.value == '0' || restDays.value == '0') {\r\n          totalValue.innerHTML = 0;\r\n        } else {\r\n          let a = total;\r\n          totalValue.innerHTML = a * place.options[place.selectedIndex].value;\r\n        }      \r\n      });\r\n\r\n       place.addEventListener('change', function() {\r\n        if (restDays.value == '' || persons.value == '' || persons.value == '0' || restDays.value == '0') {\r\n          totalValue.innerHTML = 0;\r\n        } else {\r\n          let a = total;\r\n          totalValue.innerHTML = a * this.options[this.selectedIndex].value;\r\n        }\r\n      });\r\n}\r\n\r\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./src/parts/calc.js?");

/***/ }),

/***/ "./src/parts/form.js":
/*!***************************!*\
  !*** ./src/parts/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function form(){\r\n\tlet message = {\r\n      loading: 'Загрузка.....',\r\n      success: 'Спасибо! Скоро мы с вами свяжемся ! ',\r\n      failure: 'Что то пошло не так ...'\r\n  };\r\n\r\n  let form = document.querySelector('.main-form'),\r\n      input = form.getElementsByTagName('input'), \r\n      statusMessage = document.createElement('div'),     \r\n      contactForm = document.querySelector('#form'),\r\n      contactInput = contactForm.getElementsByTagName('input'),     \r\n      statusMessageContact = document.createElement('div');\r\n\r\n     statusMessage.classList.add('status');\r\n     statusMessageContact.classList.add('status');\r\n\r\n   function sendForm (elem) {\r\n      elem.addEventListener('submit', function(event){\r\n          event.preventDefault();\r\n          let input = elem.getElementsByTagName('input');\r\n          elem.appendChild(statusMessage);\r\n          let formData = new FormData(elem);\r\n\r\n\r\n        function postData(data){\r\n            return new Promise (function(resolve,reject){\r\n              let request = new XMLHttpRequest();\r\n              request.open('POST', 'server.php');             \r\n              request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');\r\n\r\n              request.onreadystatechange = function(){\r\n                if (request.readyState < 4) {\r\n                  resolve();\r\n                } else if (request.readyState === 4 && request.status == 200) {\r\n                    if(request.status == 200 && request.status < 300) {\r\n                      resolve();\r\n                    } \r\n                    else {\r\n                      reject();\r\n                    }\r\n                }\r\n              };\r\n              request.send(data);\r\n          });\r\n        } //end postData\r\n\r\n          function clearInput(){\r\n            for (let i = 0; i < input.lenght; i++) {\r\n              input[i].value = '';\r\n            } \r\n          }        \r\n          postData(formData)\r\n          .then(()=> statusMessage.innerHTML = message.loading)\r\n          .then(()=> statusMessage.innerHTML = message.success)\r\n          .catch(()=> statusMessage.innerHTML = message.failure)\r\n          .then(clearInput);\r\n\r\n    });\r\n  } \r\n   sendForm(form);\r\n   sendForm(contactForm);\r\n}\r\n\r\nmodule.exports = form;\n\n//# sourceURL=webpack:///./src/parts/form.js?");

/***/ }),

/***/ "./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function modal(){\r\n\tlet more = document.querySelector('.more'),\r\n\t\t\toverlay = document.querySelector('.overlay'),\r\n\t\t\tclose = document.querySelector('.popup-close'),\r\n\t\t\tinfo = document.querySelector('.info');\r\n      \r\n\tmore.addEventListener('click', function() {\r\n\t\t\toverlay.style.display = 'block';\r\n\t\t\tthis.classList.add('more-splash');\r\n\t\t\tdocument.body.style.overflow = 'hidden';\r\n\t});\r\n\r\n  info.addEventListener('click', function(event) {\r\n\r\n    if (event.target.classList == \"description-btn\") {\r\n      overlay.style.display = 'block';\r\n      document.body.style.overflow = 'hidden';\r\n\r\n    } else if (event.target.classList == \"more\") {\r\n      overlay.style.display = 'block';\r\n      more.classList.add('more-splash');\r\n      document.body.style.overflow = 'hidden';\r\n    }\r\n\r\n  });\r\n\tclose.addEventListener('click', function() {\r\n\t\t\toverlay.style.display = 'none';\r\n\t\t\tthis.classList.remove('more-splash');\r\n\t\t\tdocument.body.style.overflow = '';\r\n\t});\r\n}\r\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./src/parts/modal.js?");

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider() {\r\n\tlet slideIndex = 1, \r\n    slides=document.querySelectorAll('.slider-item'),\r\n    prev = document.querySelector('.prev'),\r\n    next = document.querySelector('.next'),\r\n    dotsWrap = document.querySelector('.slider-dots') ,\r\n    dots = document.querySelectorAll('.dot');\r\n\r\n  showSlides (slideIndex);\r\n\r\n  function showSlides(n) {\r\n\r\n      if ( n > slides.length ) {  \r\n          slideIndex = 1;         \r\n      }\r\n\r\n      if ( n < 1 ){                    \r\n          slideIndex = slides.length;\r\n      }\r\n\r\n      slides.forEach ((item) => item.style.display = 'none');\r\n      dots.forEach ((item) => item.classList.remove('dot-active')); \r\n      slides[slideIndex - 1].style.display = 'block';\r\n      dots[slideIndex - 1].classList.add('dot-active'); \r\n\r\n  }\r\n\r\n  function plusSlides(n){          \r\n      showSlides(slideIndex += n);  \r\n  }\r\n\r\n   function currentSlide(n){       \r\n      showSlides(slideIndex = n);  \r\n  }\r\n\r\n  prev.addEventListener('click', function() {\r\n      plusSlides (-1);\r\n  });\r\n\r\n  next.addEventListener('click', function() {\r\n      plusSlides (1);\r\n  });\r\n\r\n  dotsWrap.addEventListener('click', function(event) {\r\n                                                      \r\n      for (let i=0; i < dots.length + 1; i++ ){       \r\n          if (event.target.classList.contains('dot') && event.target == dots[i-1]){\r\n              currentSlide(i);\r\n          }\r\n      }\r\n  });\r\n}\r\n\r\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./src/parts/slider.js?");

/***/ }),

/***/ "./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tabs() {\r\n\tlet tab = document.querySelectorAll('.info-header-tab'),\r\n      info = document.querySelector('.info-header'),\r\n      tabContent = document.querySelectorAll('.info-tabcontent');\r\n      \r\n     \r\n  function hideTabContent(a) {\r\n\t  for (let i = a; i < tabContent.length; i++) {\r\n      tabContent[i].classList.remove('show');\r\n\t    tabContent[i].classList.add('hide');\r\n    }\r\n  }\r\n\r\n  hideTabContent(1);\r\n\r\n\r\n  function showTabContent(b) {\r\n    if (tabContent[b].classList.contains('hide')) {\r\n      tabContent[b].classList.remove('hide');\r\n\t    tabContent[b].classList.add('show');\r\n    }\r\n  }\r\n\r\n\r\n  info.addEventListener('click', function(event) {\r\n    let target = event.target;\r\n    if (target && target.classList.contains('info-header-tab')) {\r\n\t    for( let i = 0; i < tab.length; i++) {\r\n        if (target == tab[i]) {\r\n          hideTabContent(0);\r\n          showTabContent(i);\r\n          break;\r\n        }\r\n      } \r\n    }      \r\n  }); \r\n}\r\n\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./src/parts/tabs.js?");

/***/ }),

/***/ "./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function timer(){\r\n\tlet deadline = '2018-10-23';\r\n\r\n  function getTimeRemaining(endtime) {\r\n  \r\n    let t = Date.parse(endtime) - Date.parse(new Date()),\r\n      seconds = (Math.floor((t/1000) % 60)).toString(),\r\n      minutes = (Math.floor((t/1000/60) % 60)).toString(),\r\n      hours = (Math.floor((t/(1000*60*60)))).toString();\r\n\r\n      if (seconds.length < 2) {\r\n        seconds = '0' + seconds;  \r\n      }\r\n\r\n      if (minutes.length < 2) { \r\n        minutes = '0' + minutes; \r\n      } \r\n\r\n      if (hours.length < 2) { \r\n        hours = \"0\" + hours; \r\n      }\r\n\r\n      return {\r\n        'total' : t,\r\n        'hours' : hours,\r\n        'minutes' : minutes,\r\n        'seconds' : seconds\r\n      };\r\n  }\r\n  function setClock(id, endtime) {\r\n    let timer = document.getElementById(id),\r\n        hours = timer.querySelector('.hours'),\r\n        minutes = timer.querySelector('.minutes'),\r\n        seconds = timer.querySelector('.seconds'),\r\n        timeInterval = setInterval(updateClock, 1000);\r\n\r\n    function updateClock() {\r\n        let t = getTimeRemaining(endtime);\r\n        hours.textContent = t.hours;\r\n        minutes.textContent = t.minutes;\r\n        seconds.textContent = t.seconds;\r\n\r\n        if (t.total <= 0){\r\n          clearInterval(timeInterval);\r\n          hours.textContent = '00';\r\n          minutes.textContent = '00';\r\n          seconds.textContent = '00';                   \r\n        }\r\n    }\r\n  }\r\n  setClock('timer', deadline);\r\n}\r\n\r\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./src/parts/timer.js?");

/***/ })

/******/ });