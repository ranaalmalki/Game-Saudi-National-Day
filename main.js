let url="https://66e7e69bb17821a9d9da6eb2.mockapi.io/login"
let form_id=document.getElementById("add-name")

// players.map(e=>{
// if(e.length >= 3){
//     console.log('stop');
    
// }else if(e.length <=3){
//     players.push(fname.value)
// }
//     console.log(e);
//     // console.log(players);

// //     if(e.length==3)
// // console.log("is 3 player");

// })
console.log(players);

  

// })



form_id.addEventListener("submit", e=>{
    let fname = document.getElementById("input-name")

    e.preventDefault()

fetch(url,{
    method:'POST',
    body:JSON.stringify({
        name:fname.value
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then(json => {
    let players= []

    if(players.length ===3){
        console.log("sart the game");
    
    }else{
        players.push(fname.value)
        console.log(players.length);
        console.log(players);
    
    }
        localStorage.setItem('username', fname.value)
window.location.href='./gameplatform/gamepage.html'})

})

// form_id.addEventListener("click",()=>{
//     // let fname = document.getElementById("input-name")

  


// // if(players.length >=3){
// //     console.log("stop");

// // }else{
// //     players.push(fname.value)
// //     console.log(players.length);
// //     console.log(players);

// // }
// })
