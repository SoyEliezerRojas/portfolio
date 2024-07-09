const open = document.querySelector("#open_menu")
const close = document.querySelector("#close_menu")
const nav = document.querySelector("#header_nav")

console.log("Hola")

open.addEventListener("click",()=>{
    nav.classList.add("show")
    nav.classList.remove("hide")
})

close.addEventListener("click",()=>{
    nav.classList.add("hide")
    nav.classList.remove("show")
})