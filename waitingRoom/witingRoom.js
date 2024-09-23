// document.addEventListener('DOMContentLoaded', () => {
//     deletAllplayer();
// });
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

function updatePayerList(){
    fetch("https://66e7e69bb17821a9d9da6eb2.mockapi.io/login")
    .then(res=>res.json())
    .then(players=>{
let playerList = document.getElementById("player-list");
playerList.innerText=''
players.forEach(element => {
    let li = document.createElement('li');
    li.textContent=element.name
    playerList.appendChild(li)
    
});


    if(players.length>=3){

        window.location.href='../gameplatform/gamepage.html'
        deletAllplayer()


    }

})
}



setInterval(updatePayerList,2000)
updatePayerList()