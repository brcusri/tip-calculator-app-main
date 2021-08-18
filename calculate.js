
var tipAmount =0;
var total = [];
var customArr = [];
function totalAmount(){
    sum = 0;
    for (let i in total){
        sum+=total[i]; 
    }
    document.getElementById("totaloutput").innerHTML = "$ " + sum.toFixed(2);
}
window.onload = function(){
    var billid = document.getElementById("Bill");
    var NumOfPEopleId = document.getElementById("Person");
    var customid = document.getElementById("Custom");
    document.getElementById("btn5").addEventListener("click", btn5);
    document.getElementById("btn10").addEventListener("click", btn10);
    document.getElementById("btn15").addEventListener("click", btn15);
    document.getElementById("btn25").addEventListener("click", btn25);
    document.getElementById("btn50").addEventListener("click", btn50);
    document.getElementById("reset-btn").addEventListener("click", resetbtn);
     function btn5(){ 
        let bill = billid.value;
        let NumOfPEople = NumOfPEopleId.value;
        let custom = customid.value;
        customArr.push(custom);
        tipAmount = (bill*0.05)/NumOfPEople; 
        total.push(tipAmount);
        window.totalAmount();
        document.getElementById("tipoutput").innerHTML = "$ " + tipAmount.toFixed(2);
        
    }
    function btn10(){
        let bill = billid.value;
        let NumOfPEople = NumOfPEopleId.value;
        let custom = customid.value;
        customArr.push(custom);
        tipAmount = (bill*0.10)/NumOfPEople;
        total.push(tipAmount);
        window.totalAmount();
        document.getElementById("tipoutput").innerHTML = "$ " + tipAmount.toFixed(2);
        
    }
    function btn15(){
        let bill = billid.value;
        let NumOfPEople = NumOfPEopleId.value;
        let custom = customid.value;
        customArr.push(custom);
        tipAmount = (bill*0.15)/NumOfPEople;
        total.push(tipAmount);
        window.totalAmount();
        document.getElementById("tipoutput").innerHTML = "$ " + tipAmount.toFixed(2);
    }
    function btn25(){
        let NumOfPEople = NumOfPEopleId.value;
        let bill = billid.value;
        let custom = customid.value;
        customArr.push(custom);
        tipAmount = (bill*0.25)/NumOfPEople;
        total.push(tipAmount);
        window.totalAmount();
        document.getElementById("tipoutput").innerHTML = "$ " + tipAmount.toFixed(2);
       
    }
    function btn50(){
        let bill = billid.value;
        let NumOfPEople = NumOfPEopleId.value;
        let custom = customid.value;
        customArr.push(custom);
        tipAmount = (bill*0.50)/NumOfPEople;
        total.push(tipAmount);
        window.totalAmount();
        document.getElementById("tipoutput").innerHTML = "$ " + tipAmount.toFixed(2);
    }
    function resetbtn(){
        document.getElementById("calculate-form").reset();
        document.getElementById("tipoutput").innerHTML = "$ 0.0"
        document.getElementById("totaloutput").innerHTML = "$ 0.0"
        total = [];
        custom = []
    }



  

    /**
    tipAmount = (bill*0.05).NumOfPEople;
    tipAmount = (bill*0.10).NumOfPEople;
    tipAmount = (bill*0.15).NumOfPEople;
    tipAmount = (bill*0.25).NumOfPEople;
    tipAmount = (bill*0.50).NumOfPEople;


    Total dizi toplam fonk

     total.push(tipAmount);
        sum = 0;
        for (var i= 0; i<=total.length;i++){
            sum+=Number(total[i]);
        }
        document.getElementById("totaloutput").innerHTML = "$ " + sum.toFixed(2);

     */
}
