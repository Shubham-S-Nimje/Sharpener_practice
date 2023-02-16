
async function getData(event){
    event.preventDefault();
    const price = event.target.price.value
    const name = event.target.name.value
    const obj = {
        name,
        price
    }
    
    try {
        let res = await axios.post('https://crudcrud.com/api/7096e40dd5964032be1c1762dc0b1cb9/cartdata',obj);
        showproductonscreen(res.data);
        localStorage.setItem(obj.name,JSON.stringify(obj))
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
    // on reload
window.addEventListener("DOMContentLoaded", async () => {
    try{
    const res = await axios.get('https://crudcrud.com/api/7096e40dd5964032be1c1762dc0b1cb9/cartdata');
    for(var i = 0;i<res.data.length;i++)
    {
        showproductonscreen(res.data[i])
    }
    console.log(res)
    } catch (err) {
        console.log(err)
    }
})
let totalpriceis = 0;
let i = 1;
function showproductonscreen(obj){
    try{
        var prentEle = document.getElementById('cartdata')
    var childEle = document.createElement('li')
    childEle.innerHTML = + i +') ' + obj.name + ' - ' + 'Rs.'+ obj.price + '/-' + ' Only '
     i++;
    //create totalprice
    var total = document.getElementById('totalprice')
    totalpriceis = totalpriceis + parseInt(obj.price);
    total.innerText = "Total Cart Value: Rs. " + totalpriceis + "/- Only"
    // console.log(obj.price.length)
    
    //create delete btn
    var delbtn = document.createElement('input')
    delbtn.value = 'Remove';
    delbtn.type = 'button';
    delbtn.id = 'delbtn';
    delbtn.onclick = () =>{
        localStorage.removeItem(obj.name)
        totalpriceis = totalpriceis - parseInt(obj.price);
        total.innerText = "Total Cart Value is: Rs. " + totalpriceis + "/- Only"
        prentEle.removeChild(childEle)
        deleteproduct(obj)
    
    }
    childEle.appendChild(delbtn)
    prentEle.appendChild(childEle)
    
}
    
        catch (err){
            console.log(err)

        }
    }
    
    async function deleteproduct(obj) {
        try {
            const res = await axios.delete(`https://crudcrud.com/api/7096e40dd5964032be1c1762dc0b1cb9/cartdata/${obj._id}`)
            console.log(res)
        }
         catch(err) {
            console.log(err)
        }
    }


    //create li element
    // var prentEle = document.getElementById('cartdata')
    // var childEle = document.createElement('li')
    // childEle.innerHTML = + i +') ' + obj.name + ' - ' + 'Rs.'+ obj.price + '/-' + ' Only '
    //  i++;
    // //create totalprice
    // var total = document.getElementById('totalprice')
    // totalpriceis = totalpriceis + parseInt(obj.price);
    // total.innerText = "Total Cart Value: Rs. " + totalpriceis + "/- Only"
    // // console.log(obj.price.length)
    
    // //create delete btn
    // var delbtn = document.createElement('input')
    // delbtn.value = 'Remove';
    // delbtn.type = 'button';
    // delbtn.id = 'delbtn';
    // delbtn.onclick = async () =>{
    //     localStorage.removeItem(obj.name)
    //     totalpriceis = totalpriceis - parseInt(obj.price);
    //     total.innerText = "Total Cart Value is: Rs. " + totalpriceis + "/- Only"
    //     prentEle.removeChild(childEle)

    // try{
    //     const res = await axios.delete(`https://crudcrud.com/api/97b9c2b1e30d49d4a259ca6f9a02c12b/cartdata/${obj._id}`);
    //     console.log(res)
    // } catch (err) {
    //     console.log(err)
    // }
    // //     axios.delete(`https://crudcrud.com/api/d4c5ec64b615404693518dd8c904f48c/cartdata/${obj._id}`)
    // // .then(res =>{
    // //     console.log(res)
    // // })
    // // .catch(err =>{
    // //     console.log(err)
    // // })
    
    // }
    // childEle.appendChild(delbtn)
    // prentEle.appendChild(childEle)
    
    
    // // var totalprice = document.createElement('h3')
    // // elendd = elendd + parseInt(obj.price);
    // // totalprice.innerText = "Total Cart Value:Rs. " + elendd + "/- Only"
    // // prentEle.appendChild(totalprice)
    // // console.log(count.value)
// }




// async function getData(event){
//     event.preventDefault();
//     const price = event.target.price.value
//     const name = event.target.name.value
//     var obj = {
//         name,
//         price
//     }
    
//     // post local storage
//     // localStorage.setItem(obj.name,JSON.stringify(obj))
//     // axios.post('https://crudcrud.com/api/d4c5ec64b615404693518dd8c904f48c/cartdata',obj)
//     // .then(res =>{
//     //     showproductonscreen(res.data)
//     //     console.log(res)
//     // })
//     // .catch(err =>{
//     //     console.log(err)
//     // })

//     //using async wait
//     try {
//         let res = await axios.post('https://crudcrud.com/api/97b9c2b1e30d49d4a259ca6f9a02c12b/cartdata',obj);
//         showproductonscreen(res.data);
//         localStorage.setItem(obj.name,JSON.stringify(obj))
//         console.log(res);
//     } catch (err) {
//         // document.body.innerHTML = `Erron in posting data to crud crud`
//         console.log(err);
//     }
// }
//     // on reload
// window.addEventListener("DOMContentLoaded", async () => {
//     try{
//     const res = await axios.get('https://crudcrud.com/api/97b9c2b1e30d49d4a259ca6f9a02c12b/cartdata');
//     for(var i = 0;i<res.data.length;i++)
//     {
//         showproductonscreen(res.data[i])
//     }
//     console.log(res)
//     } catch (err) {
//         console.log(err)
//     }

// //     axios.get('https://crudcrud.com/api/97b9c2b1e30d49d4a259ca6f9a02c12b/cartdata')
// //     .then(res => {
// //         for(var i = 0;i<res.data.length;i++)
// //     {
// //         showproductonscreen(res.data[i])
// //     }
// // })
// // .catch(err => {
// //     console.error(err)
// // })
// })
// let totalpriceis = 0;
// let i = 1;
// function showproductonscreen(obj){
//     try{
//         var prentEle = document.getElementById('cartdata')
//     var childEle = document.createElement('li')
//     childEle.innerHTML = + i +') ' + obj.name + ' - ' + 'Rs.'+ obj.price + '/-' + ' Only '
//      i++;
//     //create totalprice
//     var total = document.getElementById('totalprice')
//     totalpriceis = totalpriceis + parseInt(obj.price);
//     total.innerText = "Total Cart Value: Rs. " + totalpriceis + "/- Only"
//     // console.log(obj.price.length)
    
//     //create delete btn
//     var delbtn = document.createElement('input')
//     delbtn.value = 'Remove';
//     delbtn.type = 'button';
//     delbtn.id = 'delbtn';
//     delbtn.onclick = async () =>{
//         localStorage.removeItem(obj.name)
//         totalpriceis = totalpriceis - parseInt(obj.price);
//         total.innerText = "Total Cart Value is: Rs. " + totalpriceis + "/- Only"
//         prentEle.removeChild(childEle)
//         axios.delete(`https://crudcrud.com/api/d4c5ec64b615404693518dd8c904f48c/cartdata/${obj._id}`)
//     .then(res =>{
//         console.log(res)
//     })
//     .catch(err =>{
//         console.log(err)
//     })
    
//     }
//     childEle.appendChild(delbtn)
//     prentEle.appendChild(childEle)
    
// }
//     // var totalprice = document.createElement('h3')
//     // elendd = elendd + parseInt(obj.price);
//     // totalprice.innerText = "Total Cart Value:Rs. " + elendd + "/- Only"
//     // prentEle.appendChild(totalprice)
//     // console.log(count.value)
    
//         catch (err){
//             console.log(err)

//         }
//     }

//     //create li element
//     // var prentEle = document.getElementById('cartdata')
//     // var childEle = document.createElement('li')
//     // childEle.innerHTML = + i +') ' + obj.name + ' - ' + 'Rs.'+ obj.price + '/-' + ' Only '
//     //  i++;
//     // //create totalprice
//     // var total = document.getElementById('totalprice')
//     // totalpriceis = totalpriceis + parseInt(obj.price);
//     // total.innerText = "Total Cart Value: Rs. " + totalpriceis + "/- Only"
//     // // console.log(obj.price.length)
    
//     // //create delete btn
//     // var delbtn = document.createElement('input')
//     // delbtn.value = 'Remove';
//     // delbtn.type = 'button';
//     // delbtn.id = 'delbtn';
//     // delbtn.onclick = async () =>{
//     //     localStorage.removeItem(obj.name)
//     //     totalpriceis = totalpriceis - parseInt(obj.price);
//     //     total.innerText = "Total Cart Value is: Rs. " + totalpriceis + "/- Only"
//     //     prentEle.removeChild(childEle)

//     // try{
//     //     const res = await axios.delete(`https://crudcrud.com/api/97b9c2b1e30d49d4a259ca6f9a02c12b/cartdata/${obj._id}`);
//     //     console.log(res)
//     // } catch (err) {
//     //     console.log(err)
//     // }
//     // //     axios.delete(`https://crudcrud.com/api/d4c5ec64b615404693518dd8c904f48c/cartdata/${obj._id}`)
//     // // .then(res =>{
//     // //     console.log(res)
//     // // })
//     // // .catch(err =>{
//     // //     console.log(err)
//     // // })
    
//     // }
//     // childEle.appendChild(delbtn)
//     // prentEle.appendChild(childEle)
    
    
//     // // var totalprice = document.createElement('h3')
//     // // elendd = elendd + parseInt(obj.price);
//     // // totalprice.innerText = "Total Cart Value:Rs. " + elendd + "/- Only"
//     // // prentEle.appendChild(totalprice)
//     // // console.log(count.value)
// // }