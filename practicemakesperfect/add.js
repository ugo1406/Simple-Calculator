const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const add = document.getElementById("addBtn");
const clear = document.getElementById("clearBtn")

add.addEventListener("click", ()=>{
    const a=parseFloat(num1.value) || 0;
    const b =parseFloat(num2.value) || 0;
    const sum=a+b;

    result.value=sum;
})
clear.addEventListener("click", ()=>{
    num1.value="";
    num2.value="";
    result.value="";
})