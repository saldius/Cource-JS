	window.addEventListener('DOMContentLoaded', function() {
	
		'use strict';

//call modal window
	let engineer_btn = document.querySelector('.popup_engineer_btn'),
			phone_link = document.querySelector('.phone_link'), 
			feedback = document.querySelector('.feedback_block'),	
			popcalc_btn = document.querySelectorAll('.popup_calc_btn'),
			pop_calc_button = document.querySelector('.popup_calc_button'),
			profile_btn = document.querySelector('.popup_calc_profile_button'),
			btn_block = document.querySelector('.btn_block'),

			engineer  = document.querySelector('.popup_engineer'),
			popup = document.querySelector('.popup'),
			popcalc = document.querySelector('.popup_calc'),
			profile = document.querySelector('.popup_calc_profile'),//popup_calc_profile
		 calc_end = document.querySelector('.popup_calc_end'), 
			                                  //popup_calc_end

			main_form = document.querySelectorAll('.main_form'),
			//decoration_form = document.querySelectorAll('.decoration_form'),

			close_engineer = document.querySelector('.popup_engineer_close'),
			close_popup = document.querySelector('.popup_close'),
			close_calc = document.querySelector('.popup_calc_close'), //popup_calc_close
			close_profile= document.querySelector('.popup_calc_profile_close'),   //popup_calc_profile_close
			close_calc_end = document.querySelector('.popup_calc_end_close');     //popup_calc_end_close

     	main_form[0].style.display = 'none';
   		main_form[1].style.display = 'none';
  		main_form[2].style.display = 'none';
 			main_form[3].style.display = 'none';	
     	main_form[4].style.display = 'none';
     	main_form[5].style.display = 'none';

     	function block1(){
     		main_form[0].style.display='block'
     	}
			
	  	function block6(){
     		main_form[5].style.display='block'
     	}

			let delay_popup = 3000;
			//setTimeout("document.querySelector.main_form[0].style.display='block'", delay_popup);
			//setTimeout(block6, delay_popup);

			window.addEventListener('click', function(e) {
 				if (e.target == main_form[0]) {
    			main_form[0].style.display = 'none';
  			}
	});

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
			btn_block.addEventListener('click', function() {
			popcalc.style.display = 'block';
			document.body.style.overflow = 'hidden';
	});
			popcalc_btn[0].addEventListener('click', function() {
			popcalc.style.display = 'block';
			document.body.style.overflow = 'hidden';
	});
			close_calc.addEventListener('click', function() {
			popcalc.style.display = 'none';
			document.body.style.overflow = '';
	});
			window.addEventListener('click', function(e) {
 				if (e.target == popcalc) {
    			popcalc.style.display = 'none';
  			}
	});
			popcalc_btn[1].addEventListener('click', function() {
			popcalc.style.display = 'block';
			document.body.style.overflow = 'hidden';
	});
			popcalc_btn[2].addEventListener('click', function() {
			popcalc.style.display = 'block';
			document.body.style.overflow = 'hidden';
	});
			popcalc_btn[3].addEventListener('click', function() {
			popcalc.style.display = 'block';
			document.body.style.overflow = 'hidden';
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
/*	*/	
			pop_calc_button.addEventListener('click', function() {  // pop_calc_buttn
			profile.style.display = 'block';
			document.body.style.overflow = 'hidden';
	});

			close_profile.addEventListener('click', function() {
			profile.style.display = 'none';
			document.body.style.overflow = '';
	});
			window.addEventListener('click', function(e) {
 				if (e.target == profile) {
    			profile.style.display = 'none';
  			}
	}); //profile_btn= document.querySelector('.popup_calc_profile_button'),
			
			profile_btn.addEventListener('click', function() {
			calc_end.style.display = 'block'; 
			document.body.style.overflow = 'hidden';
	});
     
			close_calc_end.addEventListener('click', function() {
			calc_end.style.display = 'none';
			document.body.style.overflow = '';
	});
			window.addEventListener('click', function(e) {
 				if (e.target == calc_end) {
    			calc_end.style.display = 'none';
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

	function initializeClock(id, endtime) {
  let clock = document.getElementById(id),
    daysSpan = clock.querySelector('.days'),
    hoursSpan = clock.querySelector('.hours'),
    minutesSpan = clock.querySelector('.minutes'),
    secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  	updateClock();
  	var timeinterval = setInterval(updateClock, 1000);
	}

	let  deadline = new Date(Date.parse('2019-07-04') + 15 * 24 * 60 * 60 * 1000);

	initializeClock('clockdiv', deadline);		

//Tabs_ by yoga
/*
 Событие - Кликнули по нужному glazing_blok (выбор меню табов
 Действие при клике добавилив класс glazing_blok по которому кликнули active
 в стилях должно прописано glazing_blok active такие то свойства
 и должен show или display: block  нужног нам row_content
*/     
 
//Glazing
 
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
//_______________________decoration_

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
  
// view img our_works

	let works = document.querySelector('#works');
  document.getElementById('works').addEventListener('click', function(e) {

  e.preventDefault();

    if ( event.target && event.target.tagName == 'IMG' ) {       
      
      let pathBigPhoto = ('<img src="img/our_works/big_img' + e.target.src.slice(-6) +'" alt>' ),                                            
        newDiv = document.createElement('div');

 			newDiv.classList.add ('current_work');
 	    newDiv.innerHTML =pathBigPhoto ;     
      document.body.insertBefore(newDiv, document.body.firstChild);
            
      let  currentWork = document.querySelector('.current_work');
      currentWork.style.display = 'block';
      currentWork.style.display =  'flex';
      currentWork.style.alignItems = 'center';
      currentWork.style.justifyContent = 'center';

      window.addEventListener('click', function(e) {
        if (e.target == currentWork) {
          currentWork.style.display = 'none';
          document.body.style.overflow = '';
        }
      });                        
    }   
  });
});

