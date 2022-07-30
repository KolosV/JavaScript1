"use strict"
console.log(document.querySelector("button"))
document.querySelector("button").addEventListener("click",()=>{
    let h1 = document.querySelector("h1")
    console.log(h1)
    h1.textContent += document.querySelector(".text").value
})