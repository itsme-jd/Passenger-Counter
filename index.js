let count=0;
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let sum=0
function increment(){
    count+=1
    countEl.innerText=count
}


function save(){
    saveEl.textContent+=count+" - "
    console.log(count)
    count=0
    countEl.innerText=count
}

