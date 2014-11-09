var _ = require('lodash');

var tiTime = 0.2;

var gpioNumber = 2;

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
	'z' : '--..',
	' ' : '/'
}

var string2translate = 'bonjour';

var translation = '';

_.forEach(
	string2translate.split(''),
	function(char) {
		translation = translation.concat(rosettaStone[char], ' ');
	}
);

console.log(translation);

var blink = function(duration) {
	return 'gpio write ' + gpioNumber + ' 1; sleep ' + duration + '; gpio write ' + gpioNumber + ' 0; sleep ' + tiTime + ';'
}

var wait = function(duration) {
	return 'sleep ' + duration + ';'
}

var command = '';

_.forEach(
	translation.split(''),
	function(char) {
		switch (char) {
		    case '.':
		        command = command.concat(blink(tiTime));
		        break;
		    case '-':
		    	command = command.concat(blink(tiTime * 3));
		        break;
		    case ' ':
		    	command = command.concat(wait(tiTime * 2));
		    	break;
		    case '/':
		    	command = command.concat(wait(tiTime * 6));
		        break;
		} 
	}
);

console.log(command);

var exec = require('child_process').exec;
exec(command);


