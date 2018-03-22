var colors =generateRandomColor(6);

 var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
 var colorDisplay = document.getElementById("ColorDisplay");
 var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
 var resetButton  = document.querySelector("#reset");

 resetButton.addEventListener("click", function()
 {  

    //alert("dis");
     //generate all new color
     colors =generateRandomColor(6);
     //pick a new random color
     pickedColor = pickColor();
     //change color to matched color
     colorDisplay.textContent = pickedColor;

     for(var i = 0 ; i< squares.length; i++)
     {
        squares[i].style.background = colors[i];

     }

     h1.style.background = "#232323";
 })


 ColorDisplay.textContent = pickedColor;

 for(var i=0; i<squares.length; i++)
 {
     squares[i].style.background = colors[i];
     squares[i].addEventListener("click", function(){

        var ClickedColor = this.style.background;
       //  alert("correct!!");

       console.log(ClickedColor, pickedColor);
       messageDisplay.textContent = "Corect" 
       

         if(ClickedColor ===pickedColor)
         {
        //     alert("Cool");
        resetButton.textContent = "Play Again";
             changeColor(ClickedColor);
         }else{
             this.style.background  ="#232323"; 
             messageDisplay.textContent = "TryAgain" 
             
         }
     });  
 }

 function changeColor(color)
 {
//loop through all squares change each color to match given color

    for( var i = 0; i <= squares.length; i++)
    {
        squares[i].style.background = color;
    }

 }
 function pickColor()
 {
   var randomNum =   Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

function generateRandomColor(num)
{
var arr= []
for(var i = 0; i < num ; i++)
{
    //get random color and push into array
   arr.push(randomColor());

}
return arr;
}
function randomColor(){
    //pick a red from 0-255
    //pick a green and blue

   var r= Math.floor(Math.random()*256);
   var g= Math.floor(Math.random()*256);
   var b= Math.floor(Math.random()*256);

  return    "rgb("+ r + ", " +g + ", " +b + ")";

}