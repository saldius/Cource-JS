
$(document).ready(function() {

  $(document).on('click', function(event) {

    if(event.target.classList.contains('main_btna') || event.target.classList.contains('contact')) {
        
      $('.overlay').animate( {
        opacity: "toggle"
      }, 2000);
    
      $('.modal').slideDown(1000);
    }
  });
  
      $('.close').on('click', function() {
      $('.overlay').animate( {
        opacity: "toggle"
      }, 3000);
    
      $('.modal').slideUp(1000);
  });
      $('div.main_nav nav ul li:eq(1)').on('click', function() {
      $('.overlay').animate( {
        opacity: "toggle"
      }, 1000);
     
     $('.modal').slideDown(2000);
  });

});

