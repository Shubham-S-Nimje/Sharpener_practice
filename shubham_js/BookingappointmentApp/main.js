
//set data to local storage

function getData(event)
{
    event.preventDefault();
    var name = event.target.name.value;
    var email = event.target.email.value;
    var number = event.target.number.value;
    // var email = document.getElementById('email').value;
    // var name = document.getElementById('name').value;
    // var number = document.getElementById('number').value;

    var obj = {
        name,email,number
    }

    var my_email = JSON.stringify(obj);
    var my_name = JSON.stringify(obj);
    var my_number = JSON.stringify(obj);

    localStorage.setItem(obj.email, JSON.stringify(obj));
    axios.post('https://crudcrud.com/api/1d2bedf25cc74b289d9713b4abd3a765/appointmentsdata', obj)
    .then(res => {
        showUserOnScreen(res.data)
        console.log(res)
    })
    .catch(err => {
        console.error(err);
    })

    // showUserOnScreen(obj);
    // localStorage.setItem('obj.name',my_name);
    // localStorage.setItem('obj.number',my_number);
    // localStorage.setItem('obj.email',my_email);

    JSON.parse(localStorage.getItem('email'));
    JSON.parse(localStorage.getItem('name'));
    JSON.parse(localStorage.getItem('number'));
}

    window.addEventListener("DOMContentLoaded", () => {
        axios.get('https://crudcrud.com/api/1d2bedf25cc74b289d9713b4abd3a765/appointmentsdata')
        .then(res => {
            console.log(res)
            
        for(var i=0;i<res.data.length;i++)
        {
            showUserOnScreen(res.data[i])
        }
        })
        .catch(err => {
            console.log(err)
        })
    })
    


function showUserOnScreen(obj){
    var parentElem = document.getElementById('users')
    var childEle = document.createElement('li');
    

    // var childEle = document.createElement('li')
    // childElem.textContent = obj.name + ' - ' + obj.email + '-' + obj.number;
    // parentElem.appendChild(childEle);

    //parentElem.innerHTML = parentElem.innerHTML + `<li> ${obj.name} - ${obj.email} - ${obj.number}<li>`;
    childEle.textContent = obj.name + '-' + obj.email + '-' + obj.number


//delete button
    var delBtn = document.createElement('input');
    delBtn.type = "button";
    delBtn.value = "Delete";
    delBtn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/1d2bedf25cc74b289d9713b4abd3a765/appointmentsdata/${obj._id}`)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error(err);
    })
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childEle)
    }
    childEle.appendChild(delBtn);
    parentElem.appendChild(childEle);

//editbutton
    var editBtn = document.createElement('input');
    editBtn.type = "button";
    editBtn.value = "edit";
    editBtn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/1d2bedf25cc74b289d9713b4abd3a765/appointmentsdata/${obj._id}`)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error(err);
    })
    //'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
            document.getElementById('name').value = obj.name;
            document.getElementById('email').value = obj.email;
            document.getElementById('number').value = obj.number;
            localStorage.removeItem(obj.email);
            parentElem.removeChild(childEle)
    }
    childEle.appendChild(editBtn);
    parentElem.appendChild(childEle);
    
} 