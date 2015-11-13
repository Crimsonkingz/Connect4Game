// Connect 4 game
// Have 3 difficulties - Easy, Medium, Hard
// Difficulties will vary the possibilities of the computer making a "perfect" move
// Divs are placed in an array that will be the game grid
// The divs have ID's with "row:(rowNum)_column:(columnNum)" with romNum and columnNum being it's position in the array
// and classes of either "empty", "player" or "computer"
// Player will be one colour and Computer will be another colour

// Array to hold all the created div elements/game discs
var gameGridArray = [];

// Game grid that will hold all of the divs
var gameGrid = document.getElementById("gameGrid");
console.log(gameGrid);
// Initialise start settings for the game
function init() {

	// If the game grid is already populated and needs to be cleared
	if (gameGrid.children !== null) {
		
		for (var i = 0; i < gameGrid.length; i++) {}
		gameGrid.removeChild(gameGrid.children[i]);
	}
	
	
	// Create an array to represent an empty 6x7 game grid
	makeGameGridDivs(6,7);
	populateGrid(gameGridArray);

}



// Connect 4 typically has 6 rows and 7 columns (wikipedia)
function makeGameGridDivs(numRows, numColumns) {


	// Clear the game grid
	gameGridArray.length = 0;

	// Make desired number of rows (numRows)
	for (var row = 0; row < numRows; row++) {

		// Make a row array that will go inside a second array to make the grid
	  
	  
	  // Make an entry for the number of columns i.e. the length of the row
	  for (var column = 0; column  < numColumns; column++) {
	  	
	  		// Fill with a div with ID for it's position and class for it's value/colour
			var div = document.createElement("div");

			// backslashes are "escape" characters like "\n" for new line
			// so need two backslashes to output a single backslash

			div.id = "row" + row + "\\" + "column: " + column;
			div.classList.add("empty");

			// If this div is the last one of the line then change to display:block to place the next div on a new line
			if (column-1/numColumns === 1) {
				div.style.display = "block";
			}



			// Fill the grid with uniqueID "empty" div
			gameGridArray.push(div);
	    
	  }

	}
}

// Puts the divs/game slots into the game grid
function populateGrid(gameDivArray) {
	for (var i = 0; i < gameDivArray.length; i++) {
		gameGrid.appendChild(gameDivArray[i]);
	}
}

init();
