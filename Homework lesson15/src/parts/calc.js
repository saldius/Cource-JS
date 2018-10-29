function calc() {
//Calc

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


}
 module.exports = calc;