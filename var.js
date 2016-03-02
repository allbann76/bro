
var fs = require("fs");
var http = require('http');

var server = new http.Server();

server.listen(5000, '127.0.0.1');
var cont = 0;






function getRand(min,max) {
	return ~~(Math.random()*(max-min)+min);
}

var append = function(){
	fs.appendFile('dump.txt', getRand(1,9999)+"\n", 'utf8', function(err)
	{
	if(err) throw err;
	console.log('test');
	cont++;
	});
}
server.on('request', function(req, res) {

  //"в файл записано "+cont+"раз, объем файла - ");
  fs.readFile("dump.txt", "utf8", function(error, text) {
  if (error)throw error;
  res.end(text);
});
});
setInterval(append,1000);

