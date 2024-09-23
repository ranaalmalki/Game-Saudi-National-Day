

let url="https://66e7e69bb17821a9d9da6eb2.mockapi.io/login"
let form_id=document.getElementById("add-name")


localStorage.removeItem('players');
  

deletAllplayer()
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
    localStorage.setItem('players', JSON.stringify(players)); 
    // if(players.length ===3){
        console.log("sart the game");
        console.log(players.length);
        console.log(players);
        
        window.location.href='./waitingRoom/waitingRoom.html'
    // }else{
    
    //     console.log("Player added, waiting for more players...");
    // }
        

})

})

function deletAllplayer(){
    fetch("https://66e7e69bb17821a9d9da6eb2.mockapi.io/login")
    .then(res=>res.json())
    .then(players=>{
        let deleteplayers= players.map(player=>{
            fetch(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/login/${player.id}`,{
            method:'DELETE'
        })
    })
    return Promise.all(deleteplayers)
})
.then(()=>{
    console.log('All players delted sussesfuly');
    
})


}





