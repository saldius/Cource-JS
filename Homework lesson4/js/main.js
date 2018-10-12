'use strict';

let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
    time=prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money=="" || money==null ){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
} 
start();

let appData = {
    budget:money,        
    expenses:{},    
    optionalExpenses:{},    
    income:true,    
    timeData: time    ,
    saving:true,    
    chooseExpenses: function() {
        for (let i=0; i<2; i++) {    
            let a=prompt('Введите обязательную статью расходов в этом месяце',''),
                b=prompt('Во сколько обойдется?','');

            if ( (typeof (a))=== 'string' && (typeof (a)) !=null && (typeof (b)) !=null && 
                a !='' && b!=''&& a.length <50) {
                console.log("done");
                appData.expenses[a]=b;
            } else {
                i = i-1;
            }
        }      
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30);    
        alert ('Ежедневный бюджет: ' + appData.moneyPerDay +' рублей');
    },

    detectLevel: function(){
       if(appData.moneyPerDay <100){
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay >100 && appData.moneyPerDay <2000) {
            console.log("Средний уровень достатка");                                                                           
        } else if (appData.moneyPerDay >2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }  
    },
    checkSavings: function() {
       if (appData.savings== true) {
        let save = +prompt("Какова сумма накоплений ?"),
            percent = +prompt(" Под какой процент ?");
            appData.monthIncome = save / 100 /12*percent;
            alert ("Доход в месяц с вашего депозита:" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let j = 1; j < 3; j++) {
            let x= prompt("Статья необязательных расходов?", ""); 
            appData.optionalExpenses[j] = x;
        }
    },

    // метод использующий функцию для определения необязательных расходов
    //записываем в объект optionalExpenses в формате номер -ответ
    //
    //

    chooseIncome: function() {
        for( let i=1; i < 2; i++){ 
            let items = prompt("Что принесет дополнительный доход? (Перечислете через запятую)", "");
             if ( (typeof (items))=== 'string' && (typeof (items)) !=null && items !='' ) {
                appData.income = items.split(', ');
               /appData.income.push(prompt("Может что-то еще ? "));
               appData.income.sort();
               i++;
           } else {
              i = 0;    
        }
    }        
    console.log("Способы доп. заработка: ");
    appData.income.forEach(fucnction(item, i){
        console.log(i + item);                   
         // for (let j = 1; j < income.length; j++) {
         //     alert ("Способы доп. заработка: "+ i+ ': '+ item );
        });                
    }
  } 
}

appData.chooseIncome();

// 1 способ
//let arr = [], i = 0;
//for (arr[i++] in appData)
//console.log("Наша программа включает в себя данные: "+ arr);


// 2 способ

for (let key in appData ){
    console.log("Наша программа включает в себя данные: "+ key);
}




        
    









                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          