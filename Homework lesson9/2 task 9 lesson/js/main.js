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

});

