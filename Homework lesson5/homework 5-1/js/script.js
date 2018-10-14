
let menu_item=document.querySelectorAll('.menu-item'),
    li=document.createElement('li');
    classList = document.body.classList;
    body = document.getElementsByTagName('body')[0];
    imageUrl='url(img/apple_true.jpg)',
    menu=document.querySelector('.menu'),
    title=document.getElementById('title'),
    adv=document.querySelector('.adv'),
    apple=prompt ("Ваше отношенние к технике Apple?", " "),
    prompt=document.querySelector('.prompt');

menu_item[1].innerHTML='Второй пункт';
menu_item[2].innerHTML='Третий пункт';
menu.appendChild(li);
//body.style.background='url(img/apple_true.jpg)';
body.style.background=imageUrl;
li.classList.add('menu-item');
li.textContent='Пятый пункт';

document.getElementById('title').innerHTML = 'Мы продаем только подлинную технику Apple';
adv.textContent = ' ';
prompt.textContent=apple;
