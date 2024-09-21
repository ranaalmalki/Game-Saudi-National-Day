let url="https://66e7e69bb17821a9d9da6eb2.mockapi.io/login"
let fname = document.getElementById("input-name")
let form_id=document.getElementById("form-id")
form_id.addEventListener("submit", e=>{
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
    if(json){
        localStorage.setItem('username', fname.value)
window.location.href='./gameplatform/gamepage.html'}})

})