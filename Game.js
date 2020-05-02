var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".squares");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++)
{
	// backgroundColor works with more browsers over background (doesn't work in firefox with just background)

	// to add initial colors to squres
	squares[i].style.backgroundColor = colors[i];

	// to add click listeners to squares
	squares[i].addEventListener("click", function(){
		// this refers item that was clicked on
		var clickedColor = this.style.backgroundColor;
		// console.log(clickedColor);
		// console.log(pickedColor);
		if(clickedColor === pickedColor)
		{
			alert("Correct!");
		} else
		{
			alert("Incorrect");
		}
	});
}