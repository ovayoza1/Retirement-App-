
const a =document.getElementById("a");
const interest=document.getElementById("c");
const Savings=document.getElementById("d");
const sav=document.getElementById("e");
const exp=document.getElementById("f");
const noYears=document.getElementById("h");
const exp2=document.getElementById("g");

function result(){
var expenses =a.value;
var result = expenses * 25;
alert(result);
}

function youtube(){
var int =interest.value/100;
var sav =Savings.value;
var result = int * sav;
alert(result);
}
function time(){
   var RA=exp.value*25;
   var time= RA/sav.value;
   alert( time+ " years") ;
}

function years(){
    var timi=noYears.value;
    console.log(timi);
    var timi2=timi * 25;
    console.log(timi2);
    var amt = timi2/exp2.value;
    console.log(amt);
    alert(amt);
}














