console.log("This is a color fliper");
let btn = document.getElementById('btn');
let color = document.getElementById('color');
let container = document.getElementsByClassName('container');
const colors = ["cyan", "yellow", "pink", "rgba(50,70,800)", "#E2CFFF", "#33FFD7", "red", "rgba(120,15,400)", "#FF5733", "orange", "#FCC370", "#70E3FC", "#FFD2F2", "#CFCFCF", "#000000"];

btn.addEventListener("click",()=>{
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}