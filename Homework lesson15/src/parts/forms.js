function forms() {
//forms

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


}
 module.exports = forms;