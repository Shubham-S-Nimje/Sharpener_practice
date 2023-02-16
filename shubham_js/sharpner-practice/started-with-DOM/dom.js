// EXAMINE THE DOCUMENT OBJECT
// console.dir(document);

// console.log(document.dom);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.title);
// //document.title = 123;
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// document.all[10].textContent = "Hello World"

var headerTitle = document.getElementById('header-title');
var mainheader = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent = 'Hellow World';
// headerTitle.innerText = 'Ok Working';
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
//console.log(headerTitle.textContent);
mainheader.style.borderBottom = 'solid 3px #000';
headerTitle.style.color = 'green';
headerTitle.style.fontWeight = 'bold';