







// window.oncontextmenu=function(){
    //     return false;
    // }


    // task2end;;;



let button=document.getElementById("button");
button.onclick=function(){
 let value =document.getElementById('input').value;
 
    let div=document.createElement("div");
    div.setAttribute('class','box');
    let i=document.createElement('i');
    i.setAttribute('class','fa-solid fa-trash-can');
    let h1=document.createElement('h1');
    h1.innerHTML=value;
    document.getElementById('input').value="";
    div.appendChild(h1);
    div.appendChild(i);
    document.body.appendChild(div);
    i.onclick=function(){
        div.remove();
    }
}
// task1end;;;

    

    

