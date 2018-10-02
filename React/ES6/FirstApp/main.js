"use strict"

let value = 0;

function addition(a, b){
  value = a + b;
  return value;
}

let addition2 = document.getElementById('myButton').onclick = function(){
  console.log(addition(2, value));
  check();
}

let addition4 = document.getElementById('myButton1').onclick = function(){
  console.log(addition(4, value));
  check();
}

let addition6 = document.getElementById('myButton2').onclick = function(){
  console.log(addition(6, value));
  check();
}

function reset(){
    location.reload();
  }



document.getElementById('resetButton').addEventListener("click", function(){
  location.reload();
})


function check(){
  if(value == 40){
    console.log('you win');
    document.getElementById('myButton').style.display = "none";
    document.getElementById('myButton1').style.display = "none";
    document.getElementById('myButton2').style.display = "none";
    document.getElementById('resetButton').style.display = 'block';
  }
}
