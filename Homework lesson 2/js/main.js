
'use strict';

let money = prompt("Ваш бюджет на месяц?", ''),
    time=prompt("Введите дату в формате YYYY-MM-DD", ''),
    timeData;
  
let appData = {
        budget:money,
        time:timeData,
        expenses:{},
        optionalExpenses:[],
        income:[],
        saving:false
    };
    
//for (let i=0; i<2; i++) {
//     let a=prompt('Введите обязательную статью расходов в этом месяце',''),
//         b=prompt('Во сколько обойдется?','');
//    if ( (typeof (a))=== 'string' && (typeof (a)) !=null && (typeof (b)) !=null 
//       && a!='' && b!=''&& a.lenght <50) {
//        console.log("done");
//        appData.expenses[a]=b;
//                    
//    } else {
//
//    }
//}


//  цикл с while вместо for
/*
 let i = 0;
   while(i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдётся?", "");
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null  &&
    a != '' && b != '' && a.length < 50 ) {
    console.log("done");
    appData.expenses[a] = b;
    i++;
   } else {
    console.log("Произошла ошибка");
    i--;
   }
  }
  */ 

//цикл  do-while
let i=0;
do { 
    let a=prompt('Введите обязательную статью расходов в этом месяце',''),
         b=prompt('Во сколько обойдется?','');
         i++;  
    if ( (typeof (a))=== 'string' && (typeof (a)) !=null &&
     (typeof (b)) !=null && a!='' && b!=''&& a.lenght <50) {
        console.log("done");
        appData.expenses[a]=b; 
    }  
}
while (i<2);

appData.moneyPerDay = appData.budget / 30;

alert ('Ежедневный бюджет: ' + appData.moneyPerDay+' рублей');

if(appData.moneyPerDay <100){
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >100 && appData.moneyPerDay <2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}