
var tipAmount =0;
var total = [];
var customArr = [];

function totalAmount(){
    sum = 0;
    for (let i in total){
        sum+=total[i]; 
    }
    localStorage.setItem("totalAmount",sum);
    totaloutput.innerHTML = "$ " + sum.toFixed(2);
}
document.addEventListener('DOMContentLoaded',(event)=>{
    var billid = document.getElementById("Bill");
    var NumOfPEopleId = document.getElementById("Person");
    var customid = document.getElementById("Custom");
    var elements =document.getElementsByClassName("btn");
    var tipoutput = document.getElementById("tipoutput");
    var totaloutput = document.getElementById("totaloutput");

    customid.addEventListener("keypress", btn);
    document.getElementById("reset-btn").addEventListener("click", resetbtn);
    for (let elm of elements){
        elm.addEventListener("click", btn);
    }

    if(localStorage.tipAmount){

        tipoutput.innerHTML = "$ " + localStorage.getItem("tipAmount");    
    }
    else{
        tipoutput.innerHTML = "$ 0.0";
    }

    if(localStorage.totalAmount){
        totaloutput.innerHTML = "$ " + localStorage.getItem("totalAmount");
    }
    else{
        totaloutput.innerHTML = "$ 0.0";
    }
    
    function btn(e){ 
        let bill = billid.value;
        var tipPerc = this.getAttribute('data-perc');
        let NumOfPEople = NumOfPEopleId.value;
        let custom = customid.value;
        if(NumOfPEople=== "0" || NumOfPEople==="")
        {
            document.getElementById("alert").innerHTML = "Can't be zero";
            return false;
        }
        else{
            if(e.key==='Enter'){
                customperc = custom/100;
                tipAmount = (bill*customperc)/NumOfPEople;
            }
            else{
                tipAmount = (bill*tipPerc)/NumOfPEople;
            }
            total.push(tipAmount);
            totalAmount();
            localStorage.setItem("tipAmount", tipAmount);
            tipoutput.innerHTML = "$ " + tipAmount.toFixed(2); 
            
        }
    }
    function resetbtn(){
        localStorage.clear();
        tipoutput.innerHTML = "$ 0.0";
        totaloutput.innerHTML = "$ 0.0";
    }
})
    