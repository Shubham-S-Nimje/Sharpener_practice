// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'red';

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color = 'red';

// var seconditemback = document.querySelector('.list-group-item:nth-child(2)');
// seconditemback.style.backgroundColor = 'green';

// var thirdinvisible = document.querySelector('.list-group-item:nth-child(3)');
// thirdinvisible.textContent = '';

//QuerySelectorALL
var title = document.querySelectorAll('.title');
console.log(title);
title[0].textContent = 'Hello World';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(i=0;i<odd.length;i++)
{
 odd[i].style.backgroundColor = 'green';
 even[i].style.backgroundColor = '#ccc';
}

var itmcol = document.querySelectorAll('.list-group-item');
itmcol[1].style.color = 'green';




