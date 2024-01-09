const buttons = document.querySelector(".btn");
const color= document.querySelector(".colorId");

const hexColor= "0123456789ABCDEF";
const arrColor= ["Red", "Yellow", "blue", "green", "Orange", "Violet"];

//for simple color
let simpleColorGenerate=function simpleColor(){
    let randomColor= Math.floor(Math.random()*arrColor.length);
    return arrColor[randomColor];
}
 
buttons.addEventListener('click', (e)=>{
    console.log(e.target);
    document.body.style.background= `${simpleColorGenerate()}`;
    color.innerHTML=`${simpleColorGenerate()}`;
});