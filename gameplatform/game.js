// let ullist = document.createElement("ul")
let players_name_score = document.getElementById("players-name-score")
// liplayer.setAttribute("class","nav-item")
let namee=document.getElementById("show-name")

// let username =JSON.parse(localStorage.getItem('players')) || []
let username = fetch("https://66e7e69bb17821a9d9da6eb2.mockapi.io/login")
.then(res=>res.json())
.then(plyers=>{
console.log(plyers);

let plyerscore={}
plyers.forEach(element => {
    console.log(element.name);
    let divplayer=document.createElement("div")
    divplayer.setAttribute("class","divplyer")
    let playername = document.createElement("h3")
    playername.textContent=element.name
    plyerscore[element]=0;
    let scoreplayer= document.createElement("h6")
    scoreplayer.setAttribute("id", `score-${element.name}`); // تعيين معرف فريد للنقاط
    scoreplayer.textContent=`${plyerscore[element.name]}النقاط:`
// ullist.appendChild(liplayer)
players_name_score.appendChild(divplayer)
divplayer.appendChild(playername)
divplayer.appendChild(scoreplayer)

});
// namee.textContent=username
})



    
let question_1 =document.getElementById("qustion-1")


let score_player=document.getElementById("score-player");
let btn_1=document.getElementById("btn-1");
let btn_2=document.getElementById("btn-2");
let btn_3=document.getElementById("btn-3");
let btn_4=document.getElementById("btn-4");

let question =[
    {
       qus:" متى تم توحيد المملكة العربية السعودية ؟",
       opstion:["23 سبتمبر","24 سبتمبر","25 سبتمير","22 سبتمبر"],
       answer:0,
   },
   {
       qus:"ما هي عاصمة السعودية؟",
       opstion:["الرياض", "جدة", "مكة", "الدمام"],
       answer:0,
   },
   {
       qus:"ما هو اللون الأساسي في علم المملكة العربية السعودية؟",
       opstion:["الأخضر", "الأحمر", "الأزرق", "الأصفر"],
       answer:0,
   },
   {
    qus:"من هو مؤسس المملكة العربية السعودية؟",
    opstion:["الملك عبد العزيز آل سعود","الملك سعود بن عبد العزيز","الملك فيصل بن عبد العزيز","الملك خالد بن عبد العزيز"],
    answer:0,
},
{
    qus: "ما هو اسم العلم السعودي؟",
    opstion: ["علم الإخاء", "علم الوحدة", "علم السلام", "علم التوحيد"],
    answer: 3,
},
{
    qus:"في أي عام تم تأسيس المملكة العربية السعودية؟",
    opstion:["1932", "1925", "1945", "1950"],
    answer:0,
},
   ]
   

let currentqu = 0;
function nextQustion(){
    if(currentqu <question.length){
    let currentqution = question[currentqu];
    question_1.textContent=currentqution.qus
    btn_1.textContent = currentqution.opstion[0];
    btn_2.textContent = currentqution.opstion[1];
    btn_3.textContent = currentqution.opstion[2];
    btn_4.textContent = currentqution.opstion[3];
    answerd = false; 
}else{
    alert("انتهت")
         localStorage.setItem('playersScores', JSON.stringify(plyerscore));
        window.location.href="../winner/winnerpage.html"
}
}

let score = 0;
let currentindex=0
let answerd= false;
function answerCorrect(isCorrect,playername){
    // if(!answerd){
        // answerd=true
        // let current = Object.keys(plyerscore)[currentindex]
    if(isCorrect){
        // score+=100;
        plyerscore[playername]+=100

        // plyerscore[current]+=100
document.getElementById(`score-${playername}`).textContent=`النقاط:${plyerscore[playername]}`
Swal.fire({
    title: "حركات صح عليك ",
    text: "كسبت 100 ",
    icon: "success"
  });
    }else{
        Swal.fire({
            title: "إجابة خاطئة",
            text: "راحت عليك ",
            icon: "error"
          });
    }


setTimeout(()=>{
    currentqu++;
    nextQustion()

    // if(currentqu < question.length){
    //     nextQustion()
    // }else{
    //     alert("finish")
    //     localStorage.setItem('playersScores', JSON.stringify(plyerscore));
    //     window.location.href="../winner/winnerpage.html"
    // }
   
} , 1000)
    // }
}


btn_1.addEventListener("click",()=>{
    let player = Object.keys(plyerscore)
    player.forEach(playername=>{
    answerCorrect(question[currentqu].answer===0,playername)
})
})
btn_2.addEventListener("click",()=>{
    let player = Object.keys(plyerscore)
    player.forEach(playername=>{
    answerCorrect(question[currentqu].answer===1,playername)
})

})
btn_3.addEventListener("click",()=>{
    let player = Object.keys(plyerscore)
    player.forEach(playername=>{
    answerCorrect(question[currentqu].answer===2 ,playername)
})

})
btn_4.addEventListener("click",()=>{
    let player = Object.keys(plyerscore)
    player.forEach(playername=>{
    answerCorrect(question[currentqu].answer===3,playername)
})

})

nextQustion()
