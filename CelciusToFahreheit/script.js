function convert(){
    const celVal=Number(document.getElementById("input").value);
    const fahVal=(celVal/1.8)+32;
    const result=document.getElementById("result");
    result.innerHTML=fahVal.toFixed(1) +"°F";
    }
   