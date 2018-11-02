	window.addEventListener('DOMContentLoaded', function() {
	
		'use strict';

//
	let engineer_btn = document.querySelector('.popup_engineer_btn'),
			phone_link = document.querySelector('.phone_link'), 
			feedback = document.querySelector('.feedback_block'),	
			calc_btn= document.querySelector('.popup_calc_btn'),
			profile_btn= document.querySelector('.popup_calc_profile_btn'),

			engineer  = document.querySelector('.popup_engineer'),
			popup = document.querySelector('.popup'),
			calc = document.querySelector('.popup_calc'),
			profile = document.querySelector('.popup_calc_profile'),

			main_form = document.querySelector('.main_form'),

			close_engineer = document.querySelector('.popup_engineer_close'),
			close_popup = document.querySelector('.popup_close'),
			close_calc = document.querySelector('.popup_calc_close'),
			close_profile= document.querySelector('.popup_calc_profile_close');
			

     	main_form.style.display = 'none'; 

			engineer_btn.addEventListener('click', function() {
			engineer.style.display = 'block';
			document.body.style.overflow = 'hidden';
	});

			close_engineer.addEventListener('click', function() {
			engineer.style.display = 'none';
			document.body.style.overflow = '';
	});
			phone_link.addEventListener('click', function() {
			popup.style.display = 'block';
			document.body.style.overflow = 'hidden';
	});

			close_popup.addEventListener('click', function() {
			popup.style.display = 'none';
			document.body.style.overflow = '';
	});
			feedback.addEventListener('click', function() {
			popup.style.display = 'block';
			document.body.style.overflow = 'hidden';
	});	
			calc_btn.addEventListener('click', function() {
			calc.style.display = 'block';
			document.body.style.overflow = 'hidden';
	});

			close_calc.addEventListener('click', function() {
			calc.style.display = 'none';
			document.body.style.overflow = '';
	});
			profile_btn.addEventListener('click', function() {
			profile.style.display = 'block';
			document.body.style.overflow = 'hidden';
	});

			close_profile.addEventListener('click', function() {
			profile.style.display = 'none';
			document.body.style.overflow = '';
	});

//Timer			
 let deadline = '2019-07-04';

  function getTimeRemaining(endtime) {
  
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = (Math.floor((t/1000) % 60)).toString(),
      minutes = (Math.floor((t/1000/60) % 60)).toString(),
      hours = (Math.floor( (t/(1000*60*60)) % 24 )).toString(),
      days = (Math.floor( t/(1000*60*60*24))).toString();

      if (seconds.length < 2) {
        seconds = '0' + seconds;  
      }

      if (minutes.length < 2) { 
        minutes = '0' + minutes; 
      } 

      if (hours.length < 2) { 
        hours = "0" + hours; 
      }
     	if  (days.length < 2) { 
        days = "0" + days; 
      }
      return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
      };
  }
  function setClock(id, endtime) {
    let timer = document.getElementById(id),
    		days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);
        days.textContent = t.days;
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

        if (t.total <= 0){
          clearInterval(timeInterval);
          days.textContent = '00';
          hours.textContent = '00';
          minutes.textContent = '00';
          seconds.textContent = '00';                   
        }
    }
  }
  setClock('timer', deadline);  
  
});


		


