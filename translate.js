var _ = require('lodash');

var rosettaStone = {
	'a' : '.-',	
	'b' : '-...',	
	'c' : '-.-.',	
	'd' : '-..',	
	'e' : '.',	
	'f' : '..-.',	
	'g' : '--.',	
	'h' : '....',	
	'i' : '..',	
	'j' : '.---',	
	'k' : '-.-',	
	'l' : '.-..',	
	'm' : '--',	
	'n' : '-.',	
	'o' : '---',	
	'p' : '.--.',	
	'q' : '--.-',	
	'r' : '.-.',	
	's' : '...',	
	't' : '-',	
	'u' : '..-',	
	'v' : '...-',	
	'w' : '.--',	
	'x' : '-..-',	
	'y' : '-.--',	
	'z' : '--..'	
}

var string2translate = 'bonjour';

var translation = '';

_.forEach(
	string2translate.split(''),
	function(char) {
		translation = translation.concat([rosettaStone[char], ' ']);
	}
);

console.log(translation);