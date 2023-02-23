const magnifier=document.querySelector(".magnifier")
const mic=document.querySelector(".mic-icon")
const input=document.querySelector(".input")
const searchBar=document.querySelector(".search-bar-container")
// let count =2;
// magnifier.addEventListener("click", ()=>{
// if(count%2==0){
    
//     mic.classList.remove("active")
//     input.classList.remove("active")
//     searchBar.style.width=300+"px";
//     count++;
// }
// else{
//     mic.classList.add("active")
//     input.classList.add("active")
//     searchBar.style.width=50+"px";
//     count++;
// }
// })


magnifier.addEventListener("click",()=>{
searchBar.classList.toggle("active");
// mic.classList.toggle("active")
//     input.classList.toggle("active")

})