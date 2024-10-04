

/* 
Attmept at using async to get model from outside...
window.addEventListener("load", async() => {
	try {
		let cuisineImport = await import ("./cuisineMap.js");
		cuisine = cuisineImport.cuisineMap;
	} catch (err) {
		console.log(err);
	}
  
});
let cuisine; */

function sleep (time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}
		
let timeRoll = 500;
let cuisineToSearch = "";

const cuisine = new Map([
		[1, "AFRICAN"],
		[2, "AMERICAN"],
		[3, "BRAZILIAN"],
		[4, "BRITISH"],
		[5, "BRUNEIAN"],
		[6, "CANADIAN"],
		[7, "CANTONESE"],
		[8, "CARIBBEAN"],
		[9, "CHILEAN"],
		[10, "CHINESE"],
		[11, "COLOMBIAN"],
		[12, "CROATIAN"],
		[13, "CUBAN"],
		[14, "CZECH"],
		[15, "ECUADORIAN"],
		[16, "FILIPINO"],
		[17, "FINNISH"],
		[18, "HAWAIIAN"],
		[19, "GOAN"],
		[20, "GERMAN"],
		[21, "INDIAN"],
		[22, "INDONESIAN"],
		[23, "IRANIAN"],
		[24, "IRAQI"],
		[25, "JAMAICAN"],
		[26, "JAPANESE"],
		[27, "KAZAKH"],
		[28, "KOREAN"],
		[29, "LEBANESE"],
		[30, "MALAYSIAN"],
		[31, "MEXICAN"],
		[32, "MONGOLIAN"],
		[33, "OCCITAN"],
		[34, "OKINAWAN"],
		[35, "PERUVIAN"],
		[36, "PORTUGUESE"],
		[37, "RUSSIAN"],
		[38, "SINGAPOREAN"],
		[39, "SPANISH"],
		[40, "SUDANESE"],
		[41, "SWEDISH"],
		[42, "SWISS"],
		[43, "TAIWANESE"],
		[44, "TIBETAN"],
		[45, "TURKISH"],
		[46, "UKARAINIAN"],
		[47, "VIETNAMESE"],
		[48, "FAST"],
		[49, "FUSION"]
	]);
		
const rollQuotes = [
	"Keep rollin' rollin' rollin'...",
	"Letting Fate decide...",
	"Round and round we go...",
	"The Magic8 Ball says..."
];
		
		function roll() {
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