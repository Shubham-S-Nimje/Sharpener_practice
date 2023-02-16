
//set data to local storage
function getData(event) {
    selectElement = document.querySelector('#selectcat');
    event.preventDefault();
    var amount = event.target.amount.value;
    var desc = event.target.desc.value;
    var category = selectElement.options[selectElement.selectedIndex].value;

    var obj = {
        amount, desc, category
    }

    localStorage.setItem(obj.desc, JSON.stringify(obj));
    showUserOnScreen(obj);

}
function showUserOnScreen(obj) {
    var parentElem = document.getElementById('expencedata')
    var childEle = document.createElement('li');
    childEle.textContent = localStorage.getItem(obj.desc);

    //delete button
    var delBtn = document.createElement('input');
    delBtn.type = "button";
    delBtn.value = "Delete";
    delBtn.onclick = () => {
        localStorage.removeItem(obj.desc);
        parentElem.removeChild(childEle)
    }
    childEle.appendChild(delBtn);
    parentElem.appendChild(childEle);

    //edit button
    var editBtn = document.createElement('input');
    editBtn.type = "button";
    editBtn.value = "edit";
    editBtn.onclick = () => {
        localStorage.removeItem(obj.amount);
        parentElem.removeChild(childEle)
        document.getElementById('amount').value = obj.amount;
        document.getElementById('desc').value = obj.desc;
        document.getElementById('category').value = obj.category;
    }
    childEle.appendChild(editBtn);
    parentElem.appendChild(childEle);
}