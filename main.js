let url="https://66e7e69bb17821a9d9da6eb2.mockapi.io/login"
let form_id=document.getElementById("add-name")


localStorage.removeItem('players');
  


let players = JSON.parse(localStorage.getItem('players')) || [];
console.log(players);

form_id.addEventListener("submit", e=>{
    e.preventDefault()

    let fname = document.getElementById("input-name")


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
    players.push(fname.value)
    localStorage.setItem('players', JSON.stringify(players)); // تخزين اللاعبين في localStorage
    if(players.length ===3){
        console.log("sart the game");
        console.log(players.length);
        console.log(players);
        window.location.href='./gameplatform/gamepage.html'
    }else{
    
        console.log("Player added, waiting for more players...");
    }
        

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
})
