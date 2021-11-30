const count = document.querySelector(".count");
const btn = document.querySelector(".buttons");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const reset = document.querySelector(".reset");

up.addEventListener("click",(e)=>{
    count.innerHTML ++;
    count.style.color = "green";
})

down.addEventListener("click",(e)=>{
    count.innerHTML --;
    count.style.color = "red";
})

reset.addEventListener("click",(e)=>{
    count.innerHTML = 0;
    count.style.color = "blue";
})