$(document).ready(function (){
   $("#blanks form").submit(function(event){
      var q1 = $("input:radio[name=answer1]:checked").val();
      var q2 = $("input:radio[name=answer2]:checked").val();
      var q3 = $("input:radio[name=answer3]:checked").val();
       var q4 = $("input:radio[name=answer4]:checked").val();
       
    var marks=0;
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

$(".output").show();
$("#display").text("Your score is: " + marks);

event.preventDefault();


})
});