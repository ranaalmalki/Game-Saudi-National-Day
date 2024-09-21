let ullist = document.getElementById("ul-list")
// liplayer.setAttribute("class","nav-item")
let namee=document.getElementById("show-name")

let username =JSON.parse(localStorage.getItem('players')) || []
console.log(username);
username.forEach(element => {
    console.log(element);
    let liplayer=document.createElement("li")
liplayer.textContent=element
ullist.appendChild(liplayer)

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
       qus:" متى تم توحيد المملكة العربية السعودية يوم؟",
       opstion:["23 سبتمبر","24 سبتمبر","25 سبتمير","22 سبتمبر"],
       answer:0,
   },
   {
       qus:"ما هي عاصمة السعودية؟",
       opstion:["الرياض", "جدة", "مكة", "الدمام"],
       answer:0,
   },
   {
       qus:"ما هو اللون الوطني للمملكة؟",
       opstion:["الأخضر", "الأحمر", "الأزرق", "الأصفر"],
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
    if(isCorrect){
        score+=100;
score_player.textContent=`النقاط:${score}`
alert("good")
    }else{
        alert("غجاية خاطئة")
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