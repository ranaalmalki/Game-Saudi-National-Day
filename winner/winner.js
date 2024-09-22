

// let playersScores = JSON.parse(localStorage.getItem('playersScores')) || {};
// const list_winner = document.getElementById("list-winner");

// // عرض النتائج
// for (const player in playersScores) {
//     if (playersScores.hasOwnProperty(player)) {
//         let list_name = document.createElement("li");
//         list_name.textContent = `${player}: ${playersScores[player]} النقاط`;
//         list_winner.appendChild(list_name);
//     }
// }

let playersScores = JSON.parse(localStorage.getItem('playersScores')) || {};
const list_winner = document.getElementById("list-winner");

// عرض النتائج لكل اللاعبين
Object.entries(playersScores).forEach(([player, score]) => {
    let list_name = document.createElement("li");
    list_name.textContent = `${player}: ${score} النقاط`;
    list_winner.appendChild(list_name);
});
// let plyerscore={}
// username.forEach(element => {
//     console.log(element);
//     let divplayer=document.createElement("div")
//     divplayer.setAttribute("class","divplyer")
//     let playername = document.createElement("h3")
//     playername.textContent=element
//     plyerscore[element]=0;
//     let scoreplayer= document.createElement("h6")
//     scoreplayer.setAttribute("id", `score-${element}`); // تعيين معرف فريد للنقاط
//     scoreplayer.textContent=`${plyerscore[element]}النقاط:`
// // ullist.appendChild(liplayer)
// players_name_score.appendChild(divplayer)
// divplayer.appendChild(playername)
// divplayer.appendChild(scoreplayer)

// });