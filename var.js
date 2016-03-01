
var fs = require("fs");

function getRand(min,max) {
	return ~~(Math.random()*(max-min)+min);
}

var append = function(){
	fs.appendFile('dump.txt', getRand(1,9999)+"\n", 'utf8', function(err)
	{
	if(err) throw err;
	console.log('test');
	});
}
setInterval(append,1000);

