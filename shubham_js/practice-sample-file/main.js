
function getData(event){
  event.preventDefault();
  const name = event.target.name.value;
  const price = event.target.price.value
  selectEle = document.getElementById('tablenumber')
  const table = selectEle.options[selectEle.selectedIndex].value;
  
  obj = {
    name,price,table
  }
  showonscreen(obj);
  localStorage.setItem(obj.table,JSON.stringify(obj))
}
//show on screen
var lastprice = 0;
function showonscreen(obj){
  var parentele = document.getElementById("display")
  var li = document.createElement('li')
  li.innerHTML = obj.name +' - '+ obj.price +' - '+ obj.table

  parentele.appendChild(li)

  //add delete but
  var delte = document.createElement('input')
  delte.id = 'button'
  delte.type = 'button'
  delte.value = 'Delete'
  delte.onclick =() =>{
    parentele.removeChild(li)
    localStorage.removeItem(obj.table)
  }
  li.appendChild(delte);



  //add edit but
  var edit = document.createElement('input')
  edit.id = 'edit'
  edit.type = 'button'
  edit.value = 'Edit'
  edit.onclick =() =>{
    document.getElementById('name').value = obj.name
    parentele.removeChild(li)
    localStorage.removeItem(obj.table)
  }
  li.appendChild(edit);


  var total = document.getElementById("totalprice")
  lastprice = lastprice + parseInt(obj.price)
  total.innerHTML = "total Price" + lastprice
  // console.log(lastprice)
}
