function ebBill(){
    const rupess=Number(document.getElementById("input").value);
    let units=0
    if(rupess<=50){
        units=50*0.75
    } 
    else if(rupess>=50&& rupess<=150)
    {
        units=(50*0.75)+((rupess-50)*1.00)
     }
      else if (rupess>=151 && rupess<=250)
      {
        units=(50*0.75)+(100*1.00)+((rupess-150)*1.30)
       }
       else{
        units=(50*0.75)+(100*1.00)+(150*1.30)+((rupess-250)*1.50)
       }
    let result =document.querySelector("#result");
    result.innerHTML=`Your used units of this Months:${units}/units`
}