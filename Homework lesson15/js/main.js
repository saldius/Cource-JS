	window.addEventListener('DOMContentLoaded', function() {
	
		'use strict';

		
  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info'),
      tabContent = document.querySelectorAll('.info-tabcontent');

     
  function hideTabContent(a) {
	  for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
	    tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);


  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
	    tabContent[b].classList.add('show');
    }
  }


  info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
	    for( let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      } 
    }      
  }); 
   
// timer

  let deadline = '2018-10-23';

  function getTimeRemaining(endtime) {
  
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = (Math.floor((t/1000) % 60)).toString(),
      minutes = (Math.floor((t/1000/60) % 60)).toString(),
      hours = (Math.floor((t/(1000*60*60)))).toString();

      if (seconds.length < 2) {
        seconds = '0' + seconds;  
      }

      if (minutes.length < 2) { 
        minutes = '0' + minutes; 
      } 

      if (hours.length < 2) { 
        hours = "0" + hours; 
      }

      return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
      };
  }
  function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

        if (t.total <= 0){
          clearInterval(timeInterval);
          hours.textContent = '00';
          minutes.textContent = '00';
          seconds.textContent = '00';                   
        }
    }
  }
  setClock('timer', deadline);	

//modal

	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close');
      
	more.addEventListener('click', function() {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
	});

  info.addEventListener('click', function(event) {

    if (event.target.classList == "description-btn") {
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';

    } else if (event.target.classList == "more") {
      overlay.style.display = 'block';
      more.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    }

  });
	close.addEventListener('click', function() {
			overlay.style.display = 'none';
			this.classList.remove('more-splash');
			document.body.style.overflow = '';
	});

//Form modal window & contact form;

  let message = {
      loading: 'Загрузка.....',
      success: 'Спасибо! Скоро мы с вами свяжемся ! ',
      failure: 'Что то пошло не так ...'
  };

  let form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'), 
      statusMessage = document.createElement('div'),     
      contactForm = document.querySelector('#form'),
      contactInput = contactForm.getElementsByTagName('input'),     
      statusMessageContact = document.createElement('div');

      input[0].addEventListener('input', function () {
      input[0].value = input[0].value.replace(/^\d[0-9+() -]\d$/, '');
      }); 
      contactInput[1].addEventListener('input', function () {
      contactInput[1].value = contactInput[1].value.replace(/^\d[0-9+() -]\d$/, '');  
      });


     statusMessage.classList.add('status');
     statusMessageContact.classList.add('status');

   function sendForm (elem) {
      elem.addEventListener('submit', function(event){
          event.preventDefault();
          let input = elem.getElementsByTagName('input');
          elem.appendChild(statusMessage);
          let formData = new FormData(elem);


        function postData(data){
            return new Promise (function(resolve,reject){
              let request = new XMLHttpRequest();
              request.open('POST', 'server.php');             
              request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');

              request.onreadystatechange = function(){
                if (request.readyState < 4) {
                  resolve();
                } else if (request.readyState === 4 && request.status == 200) {
                    if(request.status == 200 && request.status < 300) {
                      resolve();
                    } 
                    else {
                      reject();
                    }
                }
              };
              request.send(data);
          });
        } //end postData

          function clearInput(){
            for (let i = 0; i < input.lenght; i++) {   //чистим инпуты 
              input[i].value = '';
            } 
          }        
          postData(formData)
          .then(()=> statusMessage.innerHTML = message.loading)
          .then(()=> statusMessage.innerHTML = message.success)
          .catch(()=> statusMessage.innerHTML = message.failure)
          .then(clearInput);

    }); //end function (event)
  } //end sendForm
   sendForm(form);
   sendForm(contactForm);
       
  //Slider

  let slideIndex = 1, 
    slides=document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots') ,
    dots = document.querySelectorAll('.dot');

  showSlides (slideIndex); //вызываем фунцию до ее до ее объявления, когда стр загружается мы показываем 1 слайд

  function showSlides(n) {        //Функции показа слайдов 

      if ( n > slides.length ) {  // проверка номера слайда
          slideIndex = 1;         //уст на 1 слайд
      }

      if ( n < 1 ){                    //если листаем назад
          slideIndex = slides.length; // устанавливаем в самую посл позицию
      }

      slides.forEach ((item) => item.style.display = 'none'); // переберем слайды и покажем тот который нужен
        // for (let i=0; i<slides.length; i++){   второй старый привычный способ перебора циклом
        //   slides[i].style.display = 'none';
        // } 
    
      dots.forEach ((item) => item.classList.remove('dot-active')); // убираем activ с наших точек и ост на нужном слайде
      slides[slideIndex - 1].style.display = 'block';//показываем тот слайд который нужен
      dots[slideIndex - 1].classList.add('dot-active'); // показываем нужную точку - делаем активной

  }
//
  function plusSlides(n){           // изменение параметра индекса
      showSlides(slideIndex += n);  // новое полученое знач подст как аргумент функции
  }

   function currentSlide(n){        // опр текущего слайда
      showSlides(slideIndex = n);  // устан тек слайда
  }

  prev.addEventListener('click', function() { // навигация назад
      plusSlides (-1);
  });

  next.addEventListener('click', function() { // навигация вперед
      plusSlides (1);
  });

  dotsWrap.addEventListener('click', function(event) { // делегирование событий-проверяем тот 
                                                      // элемент на который мы кликнулина определенные параметры и в соотв с этим что то делаем
      for (let i=0; i < dots.length + 1; i++ ){       //
          if (event.target.classList.contains('dot') && event.target == dots[i-1]){ // 
              currentSlide(i);
          }
      }
  });

   // Calc

  let persons = document.querySelectorAll('.counter-block-input')[0],  // количество людей
      restDays = document.querySelectorAll('.counter-block-input')[1], // количество дней отдыха
      place = document.getElementById('select'),                       // база на которой будут отдыхать люди
      totalValue = document.getElementById('total'),                   // общая сумма нашей поездки
      personsSum = 0,                                                  // переменная  кол-ва людей для расчета
      daysSum=0,                                                       // 
      total = 0;                                                       //
      totalValue.innerHTML = 0;// передаем нолик на страницу
     
      persons.addEventListener('input', function() { //
      persons.value = persons.value.replace(/\D/g,'');

    });
      persons.addEventListener('change', function () { // вешаем обработчик на первый инпут
        personsSum = +this.value;                      // записываем то что ввел пользователь
                                                      //спомощью контекста вызова мы можем получить тот элемент с каким мы общаемся на котором происходит событие change
                                                      // после того как мы получили значение мы производим арифм операции
        total = (daysSum + personsSum)*4000;//узнаем общую стоимость поездки - кол-во людей на кол-во дней
          if (restDays.value == '' || persons.value == ''|| persons.value == '0' || restDays.value == '0'){
            totalValue.innerHTML = 0;                 // проверяем если заполнено только одно поле кол-во людей
          } else {
            totalValue.innerHTML = total; // если оба поля заполнены
          }
      });

      restDays.addEventListener('input', function() {
      restDays.value = restDays.value.replace(/\D/g,'');
      });

      restDays.addEventListener('change', function(){
         daysSum = +this.value;
        total = (daysSum + personsSum)*4000;
         if(persons.value == '' || restDays.value == '' || persons.value == '0' || restDays.value == '0') {
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total;
        }      
      });

       place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '' || persons.value == '0' || restDays.value == '0') { //полнены ли наши поля
          totalValue.innerHTML = 0;
        } else {
          let a = total; //передаем знач тотал во временную переменную 
          totalValue.innerHTML = a * this.options[this.selectedIndex].value;// получение знач option из кода html
        }
      });

});


  

 



      


    

























