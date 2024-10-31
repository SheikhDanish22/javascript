document.getElementById("btn1").addEventListener("click",mystart);
document.getElementById("btn2").addEventListener("click",mystop);
document.getElementById("btn3").addEventListener("click",myclear);


var myInt;
function mycount()
{
    let myval=Number(document.getElementById("ans").innerHTML);
    myval++;
    document.getElementById("ans").innerHTML=myval;
}

function mystart(){
    myInt=setInterval(mycount,1000);
}

function mystop(){
    clearInterval(myInt);

}
function myclear(){
    document.getElementById("ans").innerHTML=0;
}