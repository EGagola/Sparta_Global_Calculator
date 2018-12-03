var num1,num2,result,val1,val2;

function screen1Val(val){
document.getElementById('screen1').value = val;
}

function screen2Val(val){
document.getElementById('screen2').value = val;
}

function getValues(){
  num1 = Number(document.getElementById('screen1').value);
  num2 = Number(document.getElementById('screen2').value);
  // console.log(num1 + num2);
}
function sumNums(){
  getValues();
  result = num1 + num2;
  alert("The result is equal to " + result);
}
function subNums(){
  getValues();
  result = num1 - num2;
  alert("The result is equal to " + result);
}
function timesNums(){
  getValues();
  result = num1 * num2;
  alert("The result is equal to " + result);
}
function divNums(){
  getValues();
  result = num1 / num2;
  alert("The result is equal to " + result);
}
