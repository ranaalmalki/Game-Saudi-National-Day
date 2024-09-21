let namee=document.getElementById("show-name")

let username = localStorage.getItem('username')

namee.textContent=username




    // let question_content =document.getElementById("qus-content")

// let div_row = document.createElement("div")
// div_row.setAttribute("class","row justify-content-around card-body")
// div_row.setAttribute("class","row")
// question.setAttribute("class","text-center")

//     let div_row1 = document.createElement("div")
//     div_row.setAttribute("class","row justify-content-around card-body")
//     let button_1=document.createElement("button")
//     button_1.setAttribute("class","col-4 border btn border-dark")
//     // let button_2=document.createElement("button")
//     // button_1.setAttribute("class","col-4 border btn border-dark")
//     // let div_row2 = document.createElement("div")
//     // div_row.setAttribute("class","row justify-content-around card-body")
     
// question_content.appendChild(div_row)
// question_content.appendChild(div_row1)
// div_row.appendChild(question_1)
// div_row1.appendChild(button_1)

//     question.map(q=>{
//         question_1.textContent=q.qus
//         // button_1.textContent=q.opstion


// })
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
        window.location.href=""
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