// console.log('person1 shows ticket');
// console.log('person2 shows ticket');

// const preMovie = async () => {

//   const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('ticket'), 3000);
//   });
//   const getPopcorn =  new Promise((resolve, reject) => {
// 		setTimeout(() => resolve('popcorn'), 3000);
//   });
  
//   const addButter =  new Promise((resolve, reject) => {
// 		setTimeout(() => resolve('butter'), 3000);
//   });
//   const getColddrinks =  new Promise((resolve, reject) => {
//     setTimeout(() => resolve('coldrink'), 3000);
// });
//   let ticket = await person3PromiseToShowTicketWhenWifeArrives;

//   console.log(`Wife: i have the ${ticket}`);
//   console.log(`Husband: we should go in now`);
//   console.log(`Wife: no i am hungry`);
  
//   let popcorn = await getPopcorn;
//   console.log(`Husband: i got some ${popcorn}`);
//   console.log(`Husband: we should go in`);
//   console.log(`Wife: i need butter on my popcorn`);
  
//   let butter = await addButter;
//   console.log(`Husband: i got some ${butter} on ${popcorn}`);
//   console.log(`Wife: i need coldrink also`);

//   let coldrink = await getColddrinks;
//   console.log(`Husband: i got some ${coldrink}`);
   
//   console.log(`Husband: Anything else darling`);
//   console.log(`Wife: lets go we are getting late`);
//   console.log(`Husband: thanks for the reminder *grin*`);
  
//   return ticket;
// };

// preMovie().then((t) => console.log(`person4 shows ${t}`));
// console.log('person4 shows ticket');

// ---------------------------------------------------------------------------
const posts = [];
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
    }, 3000)
}

// //create function
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


const callfunctions = () => {
        getPosts();
    }
createpost ({title:'WIFE: ',body:'i have the '}).then(callfunctions())
createpost ({title:'HUSBAND: ',body:'we should go in now '}).then(callfunctions()).catch(err => console.log(err))
createpost ({title:'WIFE: ',body:'no i am hungry '}).then(callfunctions()).catch(err => console.log(err))
createpost ({title:'HUSBAND: ',body:'i got some '}).then(callfunctions()).catch(err => console.log(err))
createpost ({title:'HUSBAND: ',body:'we should go ine '}).then(callfunctions()).catch(err => console.log(err))
createpost ({title:'WIFE: ',body:'i need butter on my popcorn '}).then(callfunctions()).catch(err => console.log(err))
createpost ({title:'HUSBAND: ',body:'i got some '}).then(callfunctions()).catch(err => console.log(err))
createpost ({title:'WIFE: ',body:'i need coldrink also '}).then(callfunctions()).catch(err => console.log(err))
createpost ({title:'HUSBAND: ',body:'i got some '}).then(callfunctions()).catch(err => console.log(err))
createpost ({title:'HUSBAND: ',body:'Anything else darling '}).then(callfunctions()).catch(err => console.log(err))
createpost ({title:'WIFE: ',body:'lets go we are getting late '}).then(callfunctions()).catch(err => console.log(err))
createpost ({title:'HUSBAND: ',body:'thanks for the reminder *grin* '}).then(callfunctions()).catch(err => console.log(err))
