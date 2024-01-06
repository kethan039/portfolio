const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>70);
});
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
window.onScroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}
function sendEmail() {
    window.location = "mailto:kethankumarreddy392002@gmail.com";

}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzjgBYzaH0RWc4_pGMqOXnPxAkcGMZwDUuTdlPAWXFUHwhnHIvx_8P3YMgNmvMIOAUz6A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Details have been sent Successfully!"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
