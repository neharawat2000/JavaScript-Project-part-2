const buttons= document.querySelectorAll("button");

const dec = document.querySelector(".btn1");
const reset = document.querySelector(".btn2");
const inc = document.querySelector(".btn3");

let result= document.querySelector(".result");

let count=0;

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let btn=e.target.id;
        result.style.color= btn;
        if(btn==="red"){     
            count--;
        }
        if(btn==="black"){
            count=0;
        }
        if(btn==="green"){
            count++;
        }
        result.innerHTML= `${count}`;
    });
});
