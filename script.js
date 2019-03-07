var numSquares = 6;

var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


var pickedColor = pickColor();

colorDisplay.textContent= pickedColor;

easyBtn.addEventListener("click", function() {
    numSquares = 3;
    messageDisplay.textContent= "";
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent= pickedColor;
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    numSquares = 6;
    messageDisplay.textContent= "";
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors=generateRandomColors(6);
    pickedColor=pickColor();
    colorDisplay.textContent= pickedColor;
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display="block";
    }
});

resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor= pickColor();
    //change color display to match picked color
    colorDisplay.textContent=pickedColor;
    //change colors of squares on page
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    //Change h1 background to grey
    h1.style.background = "#232323";
    //reset message
    messageDisplay.textContent= "";
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent="New Colors";
});

for(var i = 0; i<squares.length;i++){
    //add intial colors
    squares[i].style.backgroundColor = colors[i];
    
    //add click listeners
    squares[i].addEventListener("click", function(){
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor===pickedColor){
            messageDisplay.textContent="Correct!";
            changeColors(this.style.backgroundColor);
            h1.style.background = clickedColor;
            resetButton.textContent="Play Again";
        } else {
            this.style.backgroundColor= "#232323";
            messageDisplay.textContent="Try Again";
            resetButton.textContent="New Colors";
        }
        
    })
}

function changeColors(color){
    // loop through all squares
    for (var i = 0; i<colors.length; i++){
        // Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array 
    var arr= [];
    //add num random colors
    for(var i = 0; i<num; i++){
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    var r = Math.ceil(Math.random()*255);
    var g = Math.ceil(Math.random()*255);
    var b = Math.ceil(Math.random()*255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

