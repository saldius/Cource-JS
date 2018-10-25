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

//Form modal window - format json

  let message = {
      loading: 'Загрузка.....',
      success: 'Спасибо! Скоро мы с вами свяжемся ! ',
      failure: 'Что то пошло не так ...'
  };

  let form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');

      input[0].addEventListener('input', function () {
      input[0].value = input[0].value.replace(/^\d[0-9+() -]\d$/, '');  //проверяем валидацию
      });


      statusMessage.classList.add('status');

     form.addEventListener('submit', function(event){
     event.preventDefault();
     form.appendChild(statusMessage);

     let request = new XMLHttpRequest();
     request.open('POST', 'server.php');             //метод POST потому что данные кот вводит
                                                   // пользователь мы хотим отпр на сервер для того чтобы они куда то записались
     request.setRequestHeader ('Content-type', 'application/json; charset=utf-8'); //то что мы отпр на сервер получено из формы

     let formData = new FormData(form); // поместим сюда все что заполнил наш пользователь

     let obj = {};
    formData.forEach(function(value, key) {
      obj[key] = value;
    });

      let json = JSON.stringify(obj);             //превращаем обычные объекты js в json формат
     request.send(json);                         // открывает наш запрос отпр на сервер


     request.addEventListener('readystatechange ', function() {            //это чтобы наблюдать за изменениями стотояния нашего запроса 
          if (request.readyState < 4 ) {                                   // когда запрос грузится
               statusMessage.innerHTML = message.loading;          
          } else if( request.readyState === 4 && request.status== 200) {
               statusMessage.innerHTML = message.success;               // 'Спасибо! Скоро мы с вами свяжемся ! ',
          } else {
               statusMessage.innerHTML = message.failure;                // 'Что то пошло не так ...'
          }

    }); 
    for (let i = 0; i < input.lenght; i++) {   //чистим инпуты 
         input[i].value = '';
    }
  });

 //Contact form

  let contactForm = document.querySelector('#form'),
      contactInput = contactForm.getElementsByTagName('input'),
      statusMessageContact = document.createElement('div');
      
      contactInput[1].addEventListener('input', function () {
      contactInput[1].value = contactInput[1].value.replace(/^\d[0-9+() -]\d$/, '');  
      });

      statusMessageContact.classList.add('status');

    contactForm.addEventListener('submit', function(event){
    event.preventDefault();
    contactForm.appendChild(statusMessageContact);

      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');    
      request.setRequestHeader ('Content-type', 'application/json; charset=utf-8'); 

      let formData = new FormData(contactForm); 
      let obj = {};
    formData.forEach(function(value, key) {
      obj[key] = value;
    });

      let json = JSON.stringify(obj);
     request.send(json);

     request.addEventListener('readystatechange ', function() {            
          if (request.readyState < 4 ) { 
               statusMessageContact.innerHTML = message.loading;          
          } else if( request.readyState === 4 && request.status== 200) {
               statusMessageContact.innerHTML = message.success;               
          } else {
               statusMessageContact.innerHTML = message.failure;             
          }
      }); 
    for (let i = 0; i < input.lenght; i++) {
         input[i].value = '';
    }
  });
});














