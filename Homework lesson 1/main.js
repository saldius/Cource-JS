'use strict',

let money= prompt('Ваш бюджет на месяц?', ''),
    time=prompt('Введите дату в формате YYYY-MM-DD', ''),
    
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

let budget1day=budget/30;

console.log(appData);
alert ('бюджет на 1 день :', + budget1day);



        



