var fs = require('fs');

var json = JSON.parse(fs.readFileSync('directories.json', 'utf8'));

json['directories'].forEach(function (directory) {
	console.log(directory);
});

 json['directories'].forEach(function (directory) {
 	fs.mkdir(directory['name'], function (err) {
		if(err) console.error(err);
		else console.log(directory['name'] + " directory was created");
	});
 });