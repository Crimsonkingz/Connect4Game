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

// Initialise start settings for the game
function init() {

	// If the game grid is already populated and needs to be cleared
	if (gameGrid.children !== null && gameGrid.children.length !== 0) {
		
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
		
		// Create row container and assign it a row class and row number ID
		var rowContainer = document.createElement("div");
		rowContainer.id = "row" + row;
		rowContainer.classList.add("row");
		
	  
	  
	  	// Make an entry for the number of columns i.e. the length of the row
	  	for (var column = 0; column  < numColumns; column++) {
	  	
	  		// Fill with a div with ID for it's position and class for it's value/colour
			var div = document.createElement("div");

			// backslashes are "escape" characters like "\n" for new line
			// so need two backslashes to output a single backslash
			div.id = "column" + column;
			div.classList.add("slot");
			div.classList.add("empty");
			
			div.addEventListener("click", playerTokenChoice);

			rowContainer.appendChild(div);

		}

	gameGridArray.push(rowContainer);
	    
	}
}	

// Player click handler 
function playerTokenChoice() {
	
	var clickedDiv = this;
	
	// If the clicked on slot is a legal move
	if (legalMove(clickedDiv)) {
		// Remove empty class and replace with player class
		clickedDiv.classList.toggle("empty");
		clickedDiv.classList.toggle("player");

		// Remove click event listener
		clickedDiv.removeEventListener("click", playerTokenChoice);
	}
}

// Build simple computer AI
function computerTokenChoice() {}


function legalMove(clickedToken) {
	
	// Get the column of the clicked token
	var tokenColumnId = clickedToken.id;	
	// Get the row from the row parent container
	var parentRowId = clickedToken.parentNode.id;

	// Get the row and column IDs as numbers
	var tokenRow = parseInt(parentRowId.substr(3,1));
	var tokenColumn = parseInt(tokenColumnId.substr(6,1));
	
	// If the clicked token is in the last row and isn't already occupied then it is a legal move
	if (tokenRow == gameGridArray.length-1 && clickedToken.classList.contains("player") && clickedToken.classList.contains("computer")) {
		return true;
	}

	// If the clicked token is occupied then it is an illegal move
	if (clickedToken.classList.contains("player") || clickedToken.classList.contains("computer")) {
		return false;
	}
	else {

		// Get the token below the one clicked
		var rowBelow = gameGrid.childNodes[(tokenRow + 1)];		
		var tokenBelow = rowBelow.childNodes[tokenColumn];
		
		// If the token below isnt empty then it is a legal move
		if (!tokenBelow.classList.contains("empty")) {
			return true;
		}
		// If there isn't a token below then it is an illegal move
		else {
			return false;
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
