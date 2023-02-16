
const posts = [
    { title:"post1", body:"This is post1",createdtime: new Date().getTime()},
    { title:"post2", body:"This is post2",createdtime:new Date().getTime()}
];

//get post
let intervalid = 0;
function getPosts(){
    clearInterval(intervalid);
       intervalid = setInterval(() => {
            let output = "";
        for(let i=0;i<posts.length;i++)
        {
            
            output = output + `<li>${posts[i].title} : ${posts[i].body} : Post created ${Math.floor((new Date().getTime() - posts[i].createdtime)/1000)} seconds ago</li>`;
        }
        document.body.innerHTML = output;
    }, 1000)
}

//create function
function createpost(post){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
        posts.push({...post,createdtime:new Date().getTime()});
        const error = false;
        if(!error)
        {
            resolve();
        }
        else{
            reject('Error: Something went wrong');
        }
    },3000);
});
}

//delete function
function deletePost(){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if(posts.length>0)
            {
                resolve(posts.pop());
            }
        else{
            reject('Array is empty now');
        }
    },3000);
});
}
const callfunctions = () => {
    getPosts();
    deletePost().then((deleteElement) => {
        console.log(deleteElement)
        getPosts();
    deletePost().then(() => {
        getPosts();
    deletePost().then(() => {
        getPosts();
    deletePost().then(() => {}).catch((err) => {
        console.log('inside catch block',err)
    });});});});
}
createpost({title:'post3', body:'This is post3'})
.then(callfunctions()).catch(err => console.log(err))

//timer
// var timer;
// var count = 0;
// function lasteditedinsecago()
// {
//     count = 0;
// clearInterval(timer)
// timer = setInterval(() => {
//     count++;
//     console.log(count)
// },5000);
// }

const Promise1 = Promise.resolve('Hello World');
const Promise2 = 10;
const Promise3 = new Promise((resolve, reject) => 
setTimeout(resolve,2000, 'goodbye')
);
const Promise4 = new Date();
Promise.all([Promise1,Promise2,Promise3,Promise4]).then(values =>
    console.log("before creating post",posts.length,"user activity time",values[3]),
//Promise.all([Promise1,Promise2,Promise3,Promise4]).then(values =>
    console.log("post creating",posts.length,">>>>"),
// Promise.all([Promise1,Promise2,Promise3,Promise4]).then(values => 
    console.log("after creating post",posts,">>>>"),
// Promise.all([Promise1,Promise2,Promise3,Promise4]).then(values => 
    console.log("Last activity time",Promise4.getTime()));