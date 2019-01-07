//Interface Logic
$(document).ready(function (){
   $("#blanks form").submit(function(event){
      var q1 = $("input:radio[name=answer1]:checked").val();
      var q2 = $("input:radio[name=answer2]:checked").val();
      var q3 = $("input:radio[name=answer3]:checked").val();
      var q4 = $("input:radio[name=answer4]:checked").val();
      var marks = [q1, q2, q3, q4];
      var score = calculateScore(marks);
$(".output").show();
$("#display").text("Your score is: " + score +"/8pts");
document.getElementById("quiz").style.display="block";
$(".cont").fadeOut();
event.preventDefault();
})
});

//Busines Logic
function calculateScore(answers){
   q1 = answers[0]
   q2 = answers[1]
   q3 = answers[2]
   q4 = answers[3]

   var marks = 0;
   if(q1=="right")
     {
      marks=marks+2;
     }
   if(q2=="right")
     {
   marks=marks+2;
     }
 if(q3=="right")
     {
  marks=marks+2;
     }
if(q4=="right")
     {
  marks=marks+2;
     }
   return marks;
}