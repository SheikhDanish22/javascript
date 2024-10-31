document.getElementById("setbtn").addEventListener("click",dataset);
document.getElementById("getbtn").addEventListener("click",dataget);
document.getElementById("clrbtn").addEventListener("click",cleardata);

function dataset(){
    let firstNm= document.getElementById("fnm").value;
    let lastNm= document.getElementById("lnm").value;
    window.localStorage.setItem("firstName", firstNm);
    window.localStorage.setItem("lastName",lastNm);
    alert("your Data set in local storage !!!");
}

function dataget(){
    let myfnm=window.localStorage.getItem("firstName");
    let mylnm=window.localStorage.getItem("lastName");
    document.getElementById("ans").innerHTML="hi i am "+myfnm+" "+mylnm+" from bhopal"; 
}


function cleardata(){
    window.localStorage.clear();
    alert("local storage clear");
}