const buttons = document.querySelector(".btn");
const color= document.querySelector(".colorId");

const hexColor= "0123456789ABCDEF";

//for hex color
let hexColorGenerated = function (){
    let colorStart="#";
    for (let i = 0; i<6; i++) {
        let randomNum= Math.floor(Math.random()*hexColor.length);
        colorStart+=hexColor[randomNum];
    }
    return colorStart;
}
 
buttons.addEventListener('click', (e)=>{
    console.log(e.target);
    document.body.style.background= `${hexColorGenerated()}`;
    color.innerHTML=`${hexColorGenerated()}`;
});