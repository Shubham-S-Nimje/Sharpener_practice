//getelementsbyclassname 

var item = document.getElementsByClassName('list-group-item');
console.log(item[1]);
// item[1].textContent = "Hello 2";
// item[1].style.fontWeight = 'bold';
item[2].style.backgroundColor = 'green';
for(let i=0;i<item.length;i++)
{
    item[i].style.fontWeight = 'bold';
    item[i].style.color = 'blue';
}

//getelementbytagname
var li = document.getElementsByClassName('li');
console.log(li[1]);
// item[1].textContent = "Hello 2";
// item[1].style.fontWeight = 'bold';
li[2].style.backgroundColor = 'green';
for(let i=0;i<li.length;i++)
{
    li[i].style.fontWeight = 'bold';
    li[i].style.color = 'blue';
}