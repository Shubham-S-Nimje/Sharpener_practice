var form = document.getElementById('addForm');
var editList = document.getElementById('items');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


//form submit event
form.addEventListener('submit',addItem);

//edit events
editList.addEventListener('click',editItems)

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

    //create the edit buttomn element
    var editBtn = document.createElement('button');

    //add classes to it
    editBtn.className = 'btn btn-primary btn-sm float-right delete';
 
    //append text node
    editBtn.appendChild(document.createTextNode('Edit'));
 
    //appent text to li
    li.appendChild(editBtn);
 
   editList.appendChild(li);


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

//edit item
function editItems(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are you sure?'))
        {
            var li = e.target.parentElement;
            editList.removeChild(li);
        }
    }
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
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}