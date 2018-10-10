
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
        optionalExpenses:[],
        income:[],
        timeData: time,
        saving:true 
};  

function chooseExpenses() {
    for (let i=0; i<2; i++) {
        let a=prompt('Введите обязательную статью расходов в этом месяце',''),
            b=prompt('Во сколько обойдется?','');
        if ( (typeof (a))=== 'string' && (typeof (a)) !=null && (typeof (b)) !=null && 
            a !='' && b!=''&& a.length <50) {
            console.log("done");
            appData.expenses[a]=b;
        } else {
            i=i-1;
        }
    }    
}
chooseExpenses();{
 
}
 
appData.moneyPerDay = detectDayBudget(appData.budget , 30);

 function detectDayBudget (a,b) {      
     return ( a / b );
 }  
 
 //console.log(appData.moneyPerDay);

alert ('Ежедневный бюджет: ' + appData.moneyPerDay+' рублей');

function detectLevel () {
    if(appData.moneyPerDay <100){
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >100 && appData.moneyPerDay <2000) {
        console.log("Средний уровень достатка");                                                                           
    } else if (appData.moneyPerDay >2000) {
        console.log("Высокий уровень достатка");
    } else {
    console.log("Произошла ошибка");
    }    
}

function detectLevel ();

function chooseOptExpenses() {
    c= +prompt("Статья необязательных расходов?", '');
    d=prompt('Во сколько обойдется?','');
    appData.optionalExpenses[a]=b;
}




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          