var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


//form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem)

//filter events
filter.addEventListener('keyup',filterItems)



//add item
function addItem(e){
    e.preventDefault();

   //get input values
   var newItem = document.getElementById('item').value;
 

   //create new li elements
   var li = document.createElement("li");

   //addclass
   li.className = 'list-group-item';

   //add text node with input value
   li.appendChild(document.createTextNode(newItem));

   
   //get input desc values 
   var newItem2 = document.getElementById('desc').value;

   //li.appendChild(document.createTextNode(":- "));

   //add text node with input value
   li.appendChild(document.createTextNode(' ' + newItem2));

   //const descriptionNode = document.createTextNode(newItem2);

   



   //create the delete buttomn element
   var deleteBtn = document.createElement('button');
   //add classes to it

   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

   //append text node
   deleteBtn.appendChild(document.createTextNode('X'));

   //appent text to li
   li.appendChild(deleteBtn);


   itemList.appendChild(li);


  

}



//remove item
function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are you sure?'))
        {
            var li = e.target.parentElement;
            itemLish.removeChild(li);
        }
    }
}



//filter items
function filterItems(e){
    //converts text to lowercase
    var text = e.target.value.toLowerCase();
    //get li
    var items = itemList.getElementsByTagName('li');

    //convert to an array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        const desc = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || desc.toLowerCase().indexOf(text) != -1)
        {
        item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
        
    })
}