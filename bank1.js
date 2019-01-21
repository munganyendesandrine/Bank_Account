function Account(time,name,deposit, withdraw, available) {
    this.time = time;
    this.name = name;
    this.deposit = 0;
    this.withdraw = 0;
    this.available = 0;
}
//Deposit operation
Account.prototype.deposit= function (deposit) {
    var number1=document.getElementById("deposit").value;
}
Account.prototype.available=function(amountAvailable){
    var number2=document.getElementById("amountAvailable2").value;
}
function CheckDeposit(){
    var number1=parseInt(document.getElementById("deposit").value);
    var number2=parseInt(document.getElementById("amountAvailable2").value);
    var number3=number2+number1;
    document.getElementById("new1").value=number3;
    document.getElementById("time").value=Date();
    
    var number5=document.getElementById("new1").value;
    document.getElementById("amountAvailable2b").value=number5;
}
//Withdraw operation
Account.prototype.withdraw=function(withdraw){
    
    var number4=document.getElementById("withdraw").value;
}
function CheckWithdraw(){
    var number5=parseInt(document.getElementById("amountAvailable2b").value);
    var number4=parseInt(document.getElementById("withdraw").value);

    if(number5>=number4){
        var number6= document.getElementById("amountAvailable2b").value-number4;
        document.getElementById("new2").value=number6;
        document.getElementById("time2").value=Date();
    }
    else{
        alert("Sorry,You have insufficient money for withdrawing!");
    }  
}
