function slider() {
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


}
 module.exports = slider;