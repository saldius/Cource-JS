	window.addEventListener('DOMContentLoaded', function() {
	
		'use strict';

//call modal window
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
			window.addEventListener('click', function(e) {
 				if (e.target == engineer) {
    			engineer.style.display = 'none';
  			}
	});
			phone_link.addEventListener('click', function() {
			popup.style.display = 'block';
			document.body.style.overflow = 'hidden';
	});

			close_popup.addEventListener('click', function() {
			popup.style.display = 'none';
			document.body.style.overflow = '';
	});
			window.addEventListener('click', function(e) {
 				if (e.target == popup) {
    			popup.style.display = 'none';
  			}
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
			window.addEventListener('click', function(e) {
 				if (e.target == calc) {
    			calc.style.display = 'none';
  			}
	});
//Timer

	function getTimeRemaining(endtime) {
  	let t = Date.parse(endtime) - Date.parse(new Date()),
    	seconds = Math.floor((t / 1000) % 60),
    	minutes = Math.floor((t / 1000 / 60) % 60),
    	hours = Math.floor((t / (1000 * 60 * 60)) % 24),
   	 	days = Math.floor(t / (1000 * 60 * 60 * 24));
 	 		return {
				
				
    	'total': t,
    	'days': days,
    	'hours': hours,
    	'minutes': minutes,
    	'seconds': seconds
  	};
	}

	function initClock(id, endtime) {
  let clock = document.getElementById(id),
    daysSpan = clock.querySelector('.days'),
    hoursSpan = clock.querySelector('.hours'),
    minutesSpan = clock.querySelector('.minutes'),
    secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  	updateClock();
  	let timeinterval = setInterval(updateClock, 1000);
	}

	let  deadline = new Date(Date.parse('2019-07-04') + 15 * 24 * 60 * 60 * 1000);

	initClock('clockdiv', deadline);		


//Glazing tabs
 
let glazingBlock = document.querySelectorAll('.glazing_block'),
      glazingSlider = document.querySelector('.glazing_slider'),
      rowContent = document.querySelectorAll('.row_content');

     
  function hideRowContent(a) {
	  for (let i = a; i < rowContent.length; i++) {
      rowContent[i].classList.remove('show');
	    rowContent[i].classList.add('hide');
    }
  }

  hideRowContent(1);


  function showRowContent(b) {
    if (rowContent[b].classList.contains('hide')) {
      rowContent[b].classList.remove('hide');
	    rowContent[b].classList.add('show');
    }
  }


  glazingSlider.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('glazing_block')) {
	    for( let i = 0; i < glazingBlock.length; i++) {
        if (target == glazingBlock[i]) {
          hideRowContent(0);
          showRowContent(i);
          break;
        }
      } 
    }      
  }); 
  //_Decoration tabs

	let decorItem = document.querySelectorAll('.decoration_item'),
      decorationSlider = document.querySelector('.decoration_slider'),
      decorContent = document.querySelectorAll('.decoration_content_tab');

     
  function hideItemContent(a) {
	  for (let i = a; i < decorContent.length; i++) {
      decorContent[i].classList.remove('show');
	    decorContent[i].classList.add('hide');
    }
  }

  
  hideItemContent(1);


  function showItemContent(b) {
    if (decorContent[b].classList.contains('hide')) {
        decorContent[b].classList.remove('hide');
	    decorContent[b].classList.add('show');
		
    }
  }


  decorationSlider.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('decoration_item')) {
	    for( let i = 0; i < decorItem.length; i++) {
        if (target == decorItem[i]) {
          hideItemContent(0);
          showItemContent(i);
          break;
        }
      } 
    }      
  }); 
	
});
