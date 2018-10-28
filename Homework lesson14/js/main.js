
$(document).ready(function() {

  $(document).on('click', function(event) {

    if(event.target.classList.contains('main_btna') || event.target.classList.contains('contact')) {

      $('div.main_nav nav ul li:eq(1)').on('click', function() {
      $('.overlay').animate( {
        opacity: "toggle"
      }, 1000);
     
     $('.modal').slideDown(2000);
  });
         
      $('.overlay').animate( {
        opacity: "toggle"
      }, 2000);
    
      $('.modal').slideToggle(1000);
    }
  });
  
      $('.close').on('click', function() {
      $('.overlay').animate( {
        opacity: "toggle"
      }, 3000);
    
      $('.modal').hide(1000);
  });

});

