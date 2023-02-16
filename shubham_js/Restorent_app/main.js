const restoentapp = document.getElementById('restoentapp');
const dish = document.getElementById('dish');
const tables = document.getElementById('tables');
const price = document.getElementById('price');
const orders = document.getElementById('orders');



function getdata(e){
    e.preventDefault();
    const li = document.createElement("li");
    ele = document.createTextNode(`${tables.value}-${dish.value}-${price.value}`)
    li.appendChild(ele);
    orders.appendChild(li);
    obj={
        dish,tables,price
    }
    
    localStorage.setItem(obj.tables,JSON.stringify(obj))
    restoentapp.addEventListener('submit',getdata)
}
