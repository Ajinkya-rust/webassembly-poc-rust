import * as wasm from "rustcalc";

wasm.greet();

const buttonforadd=document.getElementById("buttonforadd");
const buttonforsub=document.getElementById("buttonforsub");
const buttonformul=document.getElementById("buttonformul");
const buttonfordiv=document.getElementById("buttonfordiv");
const value1=document.getElementById("number1");
const value2=document.getElementById("number2");
var resultContainer=document.getElementById("result");

//this is a button for action on addition function
buttonforadd.addEventListener("click", event =>{
    
    const a= value1.value;
    const b=value2.value;
    console.log({a,b});
    
   
    var result= wasm.addition(a,b);
    resultContainer.innerHTML= result;
   
});

//this is a button for action on substraction function
buttonforsub.addEventListener("click", event =>{
    
    const a= value1.value;
    const b=value2.value;
    console.log({a,b});
    
   
    var result= wasm.substraction(a,b);
    resultContainer.innerHTML= result;
   
});
//this is a button for action on multiplication function
buttonformul.addEventListener("click", event =>{
    
    const a= value1.value;
    const b=value2.value;
    console.log({a,b});
    
   
    var result= wasm.multiplication(a,b);
    resultContainer.innerHTML= result;
   
});

//this is a button for action on divison function
buttonfordiv.addEventListener("click", event =>{
    
    const a= value1.value;
    const b=value2.value;
    console.log({a,b});
    
   
    var result= wasm.divion(a,b);
    resultContainer.innerHTML= result;
   
});