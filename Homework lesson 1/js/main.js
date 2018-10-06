'use strict';

var money= prompt('Ваш бюджет на месяц?', ''),
    time=prompt('Введите дату в формате YYYY-MM-DD', ''),
    timeData,
    budget=money;
       
let appData = {
        budget:money,
        time:timeData,
        expenses:{},
        optionalExpenses:[],
        income:false,
    };
let answerOn1Question=prompt('Введите обязательную статью расходов в этом месяце',''),
    answerOn2Question=prompt('Во сколько обойдется?',''),
    answerOn3Question=prompt('Введите обязательную статью расходов в этом месяце',''),
    answerOn4Question=prompt('Во сколько обойдется?','');

console.log(money);
//console.log(time);
//console.log(appData);
alert ('Ваш бюджет на 1 день составит: ' + budget/30+' рублей');



        



