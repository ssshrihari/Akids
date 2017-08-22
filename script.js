
//save and next
var level=1;
document.getElementById("save").style.display="none";
document.getElementById("next").style.display="none";
//initial colour
document.getElementById("b1").style.backgroundColor = "orange";

//game
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var save=document.getElementById("save");
var next=document.getElementById("next");
//save and playagain
if(level==2)
{
  save.onclick=function(){
  document.getElementById("save").style.display="none";
   document.getElementById("next").style.display="none";
  b1.style.backgroundColor = "yellow";
}
next.onclick=function()
{
  document.getElementById("save").style.display="none";
  document.getElementById("next").style.display="none";
  b1.style.backgroundColor = "red";
  level=3;
}
  b1.onclick = function() {
     b2.style.background = "black";
     b1.style.background = "white";   
}

b2.onclick = function() {
     b3.style.background = "yellow";
     b2.style.background = "white";   
}

b3.onclick = function() {
     b4.style.background = "violet";
     b3.style.background = "white";   
}
b4.onclick = function() {
     b5.style.background = "red";
     b4.style.background = "white";   
}
b5.onclick = function() {
     b6.style.background = "green";
     b5.style.background = "white";   
}

b6.onclick = function() {
     b7.style.background = "purple";
     b6.style.background = "white";   
}

b7.onclick = function() {
     b8.style.background = "brown";
     b7.style.background = "white";   
}
b8.onclick = function() {
     b9.style.background = "orange";
     b8.style.background = "white";   
}
//final colour
b9.onclick = function() {
     b9.style.background = "white";  
     alert("WOW You have completed the task congratulations!!");
     document.getElementById("save").style.display="block";
     document.getElementById("next").style.display="block";
}

}


/*
if(level==1)
{
     b2.disabled = true; 
     b3.disabled = true; 
     b4.disabled = true; 
     b5.disabled = true; 
     b6.disabled = true; 
     b7.disabled = true; 
     b8.disabled = true; 
     b9.disabled = true; 
  save.onclick=function(){
  document.getElementById("save").style.display="none";
   document.getElementById("next").style.display="none";
  b1.style.backgroundColor = "orange";
  b1.disabled=false;
}
next.onclick=function()
{
  document.getElementById("save").style.display="none";
  document.getElementById("next").style.display="none";
  b1.style.backgroundColor = "yellow";
  b1.disabled=false;
  level=2;
}

b1.onclick = function() {
     b2.style.background = "green";
     b1.style.background = "white";  
     b1.disabled = true; 
     b2.disabled = false; 
     b3.disabled = true; 
     b4.disabled = true; 
     b5.disabled = true; 
     b6.disabled = true; 
     b7.disabled = true; 
     b8.disabled = true; 
     b9.disabled = true; 
}

b2.onclick = function() {
     b3.style.background = "yellow";
     b2.style.background = "white";
     b1.disabled = true; 
     b2.disabled = true; 
     b3.disabled = false; 
     b4.disabled = true; 
     b5.disabled = true; 
     b6.disabled = true; 
     b7.disabled = true; 
     b8.disabled = true; 
     b9.disabled = true;    
}

b3.onclick = function() {
     b4.style.background = "violet";
     b3.style.background = "white";   
     b1.disabled = true; 
     b2.disabled = true; 
     b3.disabled = true; 
     b4.disabled = false; 
     b5.disabled = true; 
     b6.disabled = true; 
     b7.disabled = true; 
     b8.disabled = true; 
     b9.disabled = true; 
}
b4.onclick = function() {
     b5.style.background = "red";
     b4.style.background = "white";   
     b1.disabled = true; 
     b2.disabled = true; 
     b3.disabled = true;
     b4.disabled = true;  
     b5.disabled = false; 
     b6.disabled = true; 
     b7.disabled = true; 
     b8.disabled = true; 
     b9.disabled = true; 
}
b5.onclick = function() {
     b6.style.background = "green";
     b5.style.background = "white";
     b1.disabled = true; 
     b2.disabled = true; 
     b3.disabled = true; 
     b4.disabled = true;
     b5.disabled = true;  
     b6.disabled = false; 
     b7.disabled = true; 
     b8.disabled = true; 
     b9.disabled = true;    
}

b6.onclick = function() {
     b7.style.background = "purple";
     b6.style.background = "white";  
     b1.disabled = true; 
     b2.disabled = true; 
     b3.disabled = true; 
     b4.disabled = true; 
     b5.disabled = true;
     b6.disabled = true;  
     b7.disabled = false; 
     b8.disabled = true; 
     b9.disabled = true;  
}

b7.onclick = function() {
     b8.style.background = "brown";
     b7.style.background = "white";   
     b1.disabled = true; 
     b2.disabled = true; 
     b3.disabled = true; 
     b4.disabled = true; 
     b5.disabled = true; 
     b6.disabled = true;
     b7.disabled = true;  
     b8.disabled = false; 
     b9.disabled = true; 
}
b8.onclick = function() {
     b9.style.background = "orange";
     b8.style.background = "white";   
     b1.disabled = true; 
     b2.disabled = true; 
     b3.disabled = true; 
     b4.disabled = true; 
     b5.disabled = true; 
     b6.disabled = true; 
     b7.disabled = true; 
     b8.disabled = true; 
     b9.disabled = false; 
}
//final colour
b9.onclick = function() {
     b9.style.background = "white";  
     b2.disabled = true; 
     b3.disabled = true; 
     b4.disabled = true; 
     b5.disabled = true; 
     b6.disabled = true; 
     b7.disabled = true; 
     b8.disabled = true; 
     b9.disabled = true;
     b1.disabled = true; 
     alert("WOW You have completed the task congratulations!!");
     document.getElementById("save").style.display="block";
     document.getElementById("next").style.display="block";

}
}


/*if(level==3)
{
   save.onclick=function(){
  document.getElementById("save").style.display="none";
   document.getElementById("next").style.display="none";
  b1.style.backgroundColor = "red";
}
  b1.onclick = function() {
     b2.style.background = "green";
     b1.style.background = "white";   
}

b2.onclick = function() {
     b3.style.background = "yellow";
     b2.style.background = "white";   
}

b3.onclick = function() {
     b4.style.background = "violet";
     b3.style.background = "white";   
}
b4.onclick = function() {
     b5.style.background = "red";
     b4.style.background = "white";   
}
b5.onclick = function() {
     b6.style.background = "green";
     b5.style.background = "white";   
}

b6.onclick = function() {
     b7.style.background = "purple";
     b6.style.background = "white";   
}

b7.onclick = function() {
     b8.style.background = "brown";
     b7.style.background = "white";   
}
b8.onclick = function() {
     b9.style.background = "orange";
     b8.style.background = "white";   
}
//final colour
b9.onclick = function() {
     b9.style.background = "white";  
     alert("WOW You have completed the task congratulations!!");
     document.getElementById("save").style.display="block";
    // document.getElementById("next").style.display="block";
}

}*/
