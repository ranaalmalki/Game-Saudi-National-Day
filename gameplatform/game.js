// let ullist = document.createElement("ul")
let players_name_score = document.getElementById("players-name-score")
// liplayer.setAttribute("class","nav-item")
let namee=document.getElementById("show-name")

let username =JSON.parse(localStorage.getItem('players')) || []
console.log(username);

let plyerscore={}
username.forEach(element => {
    console.log(element);
    let divplayer=document.createElement("div")
    divplayer.setAttribute("class","divplyer")
    let playername = document.createElement("h3")
    playername.textContent=element
    plyerscore[element]=0;
    let scoreplayer= document.createElement("h6")
    scoreplayer.setAttribute("id", `score-${element}`); // تعيين معرف فريد للنقاط
    scoreplayer.textContent=`${plyerscore[element]}النقاط:`
// ullist.appendChild(liplayer)
players_name_score.appendChild(divplayer)
divplayer.appendChild(playername)
divplayer.appendChild(scoreplayer)

});
// namee.textContent=username




    
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
    let currentqution = question[currentqu];
    question_1.textContent=currentqution.qus
    btn_1.textContent = currentqution.opstion[0];
    btn_2.textContent = currentqution.opstion[1];
    btn_3.textContent = currentqution.opstion[2];
    btn_4.textContent = currentqution.opstion[3];
    answerd = false; 
}


let score = 0;
let answerd= false;
function answerCorrect(isCorrect){
    if(!answerd){
        answerd=true
        let current = username[0]
    if(isCorrect){
        score+=100;
        plyerscore[current]+=100
document.getElementById(`score-${current}`).textContent=`النقاط:${plyerscore[current]}`
Swal.fire({
    title: "حركات صح عليك ",
    text: "كسبت 100 ",
    icon: "success"
  });
// alert("good")
    }else{
        Swal.fire({
            title: "إجابة خاطئة",
            text: "راحت عليك ",
            icon: "error"
          });
    }


setTimeout(()=>{
    currentqu++;
    if(currentqu < question.length){
        nextQustion()
    }else{
        alert("finish")
        window.location.href="../winner/winnerpage.html"
    }
   
} , 1000)
    }
}


btn_1.addEventListener("click",()=>{
    answerCorrect(question[currentqu].answer===0)
})
btn_2.addEventListener("click",()=>{
    answerCorrect(question[currentqu].answer===1)
})
btn_3.addEventListener("click",()=>{
    answerCorrect(question[currentqu].answer===2)
})
btn_4.addEventListener("click",()=>{
    answerCorrect(question[currentqu].answer===3)
})

nextQustion()