var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = targetColor();
var gameTitle = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    // genereate 3 new colors
    colors = generateRandomColors(numSquares);
    // select a target color 
    pickedColor = targetColor();
    // change all colors when the easy button is pressed
    gameTitle.textContent = pickedColor
    for (var i = 0; i < squares.length; i++) {
        // Add initial colors to the squares
        // show 3 sqaures only
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"
        }

    }

});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    // select a target color 
    pickedColor = targetColor();
    // change all colors when the easy button is pressed
    gameTitle.textContent = pickedColor
        // back to 6 squares
    for (var i = 0; i < squares.length; i++) {
        // Add initial colors to the squares
        // show 3 sqaures only
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    // change color of the header
    message.textContent = ""
    h1.style.backgroundColor = "steelblue"
        // generate new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color
    pickedColor = targetColor();
    // change display color 
    gameTitle.textContent = pickedColor
        // change the color of each square
        // from the list of random
    for (var i = 0; i < squares.length; i++) {
        // Add initial colors to the squares
        squares[i].style.backgroundColor = colors[i];
    }
});

// shows the 6 squares at the start of the game
for (var i = 0; i < squares.length; i++) {
    // Add initial colors to the squares
    squares[i].style.backgroundColor = colors[i];
    // Add click Listeners to the square
    squares[i].addEventListener("click", function() {
        // get the color of the clicked square
        var clickedColor = (this.style.backgroundColor);
        console.log(clickedColor)
            // compare color to the picked color
        if (clickedColor === pickedColor) {
            // if the player wins
            message.textContent = "Correct!"
            changeColor(clickedColor)
            h1.style.backgroundColor = clickedColor
            resetButton.textContent = "Play Again"
        } else {
            this.style.backgroundColor = "#232323"
            message.textContent = "Try Again"
        }
    });
}

gameTitle.textContent = pickedColor

function changeColor(color) {
    // loop through all the colors
    for (var i = 0; i < squares.length; i++) {
        // change the color of all squares to 
        // the correct color
        // colors[i].style.backgroundColor =  color; 
        // the above code tries to change the colors array 
        // and not the squares
        squares[i].style.backgroundColor = color
    }
};
// HAVE NO IDEA HOW THIS IS WORKING
function targetColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make array
    var arr = []
        // add random color to the array
    for (var i = 0; i < num; i++) {
        // get random color and push to array
        arr.push(randomColor())
    }
    return arr
}

function randomColor() {
    // pick a red from 0 - 255
    // save to a variable
    var r = Math.floor(Math.random() * 256)
        // pick a blue from 0 - 255
        // save to a variable
    var b = Math.floor(Math.random() * 256)
        // pick a green from 0 - 255
        // save to a variable
    var g = Math.floor(Math.random() * 256)
        // formatted as rgb(0,0,0) etc
    return "rgb(" + r + ", " + g + ", " + b + ")"
}