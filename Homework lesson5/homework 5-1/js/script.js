
let menu_item=document.querySelectorAll('.menu-item'),
    li=document.createElement('li');
    body = document.getElementsByTagName('body')[0];
    menu=document.querySelector('.menu'),
    title=document.getElementById('title'),
    adv=document.querySelector('.adv'),
    column=document.querySelectorAll('.column'),
    promptApple=document.querySelector('.prompt');

menu.InsertBefore(menu_item[2], menu_item[1]);
menu.appendChild(li);
li.classList.add('menu-item');
li.textContent='Пятый пункт';
column[1].removeChild(adv);
promptAppleTextContent=prompt('Как вы относитесь к технике Apple');
document.getElementById('title').innerHTML = 'Мы продаем только подлинную технику Apple';
title.innerHTML = 'Мы продаем только подлинную технику Apple';

