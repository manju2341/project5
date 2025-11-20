let span= document.getElementsByClassName("sp")[0];
let btn1=document.getElementById("b1");
let btn2=document.getElementsByClassName("b2")[0];
let btn3=document.getElementsByClassName("b3")[0];

let count=0;
btn1.addEventListener("click",decremet);
btn2.addEventListener("click",reset);
btn3.addEventListener("click",increment);

function decremet(){
    count--;
    console.log(count);
    UpdateCounter();
}
function reset(){
    count=0;
    console.log(count);
    UpdateCounter();
}   
function increment(){
    count++;
    console.log(count);
    UpdateCounter();
}

function UpdateCounter(){
    span.innerHTML=count;
    if(count>0){
        span.style.color="green";
    }
    else if(count<0){
        span.style.color="red";
    }
    else{
        span.style.color="black";
    }
}
