
const posts = [
    { title:"post1", body:"This is post1",createdtime: new Date().getTime()},
    { title:"post2", body:"This is post2",createdtime:new Date().getTime()}
];
let intervalid = 0;
function getposts(){
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
function createpost(post,callback){
    setTimeout(() => {
        posts.push({...post,createdtime:new Date().getTime()})
        callback()
    },6000);
}
getposts();
createpost({title:'post3', body:'This is post3'},getposts);
createpost({title:'post4', body:'This is post4'},getposts);

var timer;
var count = 0;
function lasteditedinsecago()
{
    count = 0;
clearInterval(timer)
timer = setInterval(() => {
    count++;
    console.log(count)
},5000);
}