
// for Quiz
const QA=["Right Angled","Equilateral","Right Angled","Scaline","20","Yes","No","Yes"]
function scorecalculator(){
  var a1=document.quiz.q1.value;
  var a2=document.quiz.q2.value;
  var a3=document.quiz.q3.value;
  var a4=document.quiz.q4.value;
  var a5=document.quiz.q5.value;
  var a6=document.quiz.q6.value;
  var a7=document.quiz.q7.value;
  var a8=document.quiz.q8.value;
  var answers=[a1,a2,a3,a4,a5,a6,a7,a8];
  var score=0;
  var res=document.getElementById("result");
  for(var i=0; i<QA.length;i++)
   {
      if(answers[i]==QA[i])
      score++;
    
   }
  //  console.log(score);  
  res.textContent="Your Score : "+`${score}` 
  res.style.backgroundColor="darkblue";
  res.style.border="2px solid black"
}


// for Area
function Display(a) {
  // var dis = document.choice.disp.value;
  console.log(a);
  var Output=document.getElementById("Area");
  Output.style.display="none"
  
  var sides=document.getElementById("Displaysides")
  var base=document.getElementById("DisplaybaseHeight")
  var special=document.getElementById("DisplaySpecial")
  switch(a)
  {
    case 1: sides.style.display = "block";
              base.style.display = "none";
              special.style.display = "none";
              break;

    case 2: base.style.display = "block";
              sides.style.display = "none";
              special.style.display = "none";
              break;

    case 3:special.style.display = "block";
              base.style.display = "none";
              sides.style.display = "none";
              break;
               
  }

 
}


var Area=0;
function CalculateArea(x){
  var Output=document.getElementById("Area");
switch(x){
  case 1: var a=parseFloat(document.querySelector("#side1").value);
          var b=parseFloat(document.querySelector("#side2").value);
          var c=parseFloat(document.querySelector("#side3").value);
          var s=(a+b+c)/2;
          Area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
          break;
  case 2: var b=parseFloat(document.querySelector("#base").value);
          var h=parseFloat(document.querySelector("#height").value);
          Area=(b*h)/2;
          break;
  case 3: var a=parseFloat(document.querySelector("#side").value);
          Area=(a*a*Math.sqrt(3))/4
          break;
  case 4: var a=parseFloat(document.querySelector("#baseiso").value);
          var b=parseFloat(document.querySelector("#Equalside").value);
          var h=Math.sqrt(a*a-(b*b)/4)
          Area=(b*h)/2;
          break;
               
}    
Output.style.display="block"
Output.textContent="Area = "+`${Area}`;
Output.style.backgroundColor="darkblue";
Output.style.border="2px solid black"

}

// function DisplaybaseHeight() {
//   var x = document.getElementById("DisplaybaseHeight");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

function DisplaySpecial(x) {
  var Output=document.getElementById("Area");
  Output.style.display="none"
  var Equi = document.getElementById("DisplayEquilateral");
  var Iso = document.getElementById("DisplayIsosceles")
  if (x === 1) {
    Equi.style.display = "block";
    Iso.style.display = "none";
  } else {
    Equi.style.display = "none";
    Iso.style.display = "block";
  }
}

//hypotenuse
function CalcHypotenuse()
{
  var perpendicular=document.querySelector("#perp");
  var base=document.querySelector("#base");
  var p=parseFloat(perpendicular.value), b=parseFloat(base.value);
  var hypotenuse=Math.sqrt(p*p+b*b);
  var Output=document.getElementById("hypotenuse");
  Output.style.display="block";
  Output.textContent="Hypotenuse = "+`${hypotenuse}`;
  Output.style.backgroundColor="darkblue";
  Output.style.border="2px solid black"

}
function CheckValidity(){
  var angle1=document.querySelector("#ang1");
  var angle2=document.querySelector("#ang2");
  var angle3=document.querySelector("#ang3");
  var A=parseFloat(angle1.value), B=parseFloat(angle2.value), C=parseFloat(angle3.value);
  var sum=A+B+C;;
  var Output=document.getElementById("Valid");
  Output.style.display="block";
  if(sum===180)
  Output.textContent="Triangle Is Valid";
  else
  Output.textContent="Triangle Is Invalid: Sum of Angles should be equal to 180 Degrees";
  Output.style.backgroundColor="darkblue";
Output.style.border="2px solid black"
}