let url="https://66e7e69bb17821a9d9da6eb2.mockapi.io/login"
let form_id=document.getElementById("add-name")

let players= []

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
    console.log(players.length);
    console.log(players);
    localStorage.setItem('players', JSON.stringify(players))


    if(players.length ===3){
        console.log("sart the game");
        window.location.href='./gameplatform/gamepage.html'
    
      
    }
       
})

})

