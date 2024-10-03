

window.addEventListener("load", async() => {
	try {
		let cuisineImport = await import ("./cuisineMap.js");
		cuisine = cuisineImport.cuisineMap;
	} catch (err) {
		console.log(err);
	}
  
});

let cuisine;

function sleep (time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}
		
let timeRoll = 100;
let cuisineToSearch = "";
		
const rollQuotes = [
	"Keep rollin' rollin' rollin'...",
	"Letting Fate decide...",
	"Round and round we go...",
	"The Magic8 Ball says..."
];
		
		function roll() {
			console.log(cuisine);
			let quoteValue = Math.floor(Math.random() * (rollQuotes.length));		
			document.getElementById('text').innerHTML = rollQuotes[quoteValue];
			//document.getElementById("dice").src="images/dice-game.gif";
			//document.getElementById("dice").disabled = true;
			sleep(timeRoll).then(() => {
				cuisinePick();
				cuisinePick();
			});
		}
		
		function cuisinePick() {
			let cuisineValue = Math.floor(Math.random() * (cuisine.size));
			let cusineObj = cuisine.get(cuisineValue);
			document.getElementById('text').innerHTML = cusineObj;
			document.getElementById('mapSearchSection').style.visibility = 'visible';
			cuisineToSearch = cusineObj;
		}
		
		function searchForCuisine() {
			var queryStart = 'https://www.google.com/maps/search/?api=1&query='; 
			var query = queryStart + cuisineToSearch + '+FOOD';
			window.location.href = query;
		}