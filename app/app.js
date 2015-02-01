//exports.angularTree = function() {

var wget = require('wget');
var fs = require('fs');

var json = JSON.parse(fs.readFileSync('directories.json', 'utf8'));

createTree(json['directories'], '');

function createTree(directories, root) {
    for (var i = 0; i < directories.length; ++i) {
        var directory = directories[i];
        var name = root + directory['name'];

        fs.mkdirSync(name);

        if (directory['children']) {
            var children = directory['children'];
            createTree(children, name + '/');
        }

        if (directory['file']) {

            var url = directory['file'];
            var nameFile = url.split("/");
            nameFile = nameFile[nameFile.length - 1];

            console.log(nameFile);
            var output = name + "/" + nameFile;

            var download = wget.download(url, output);
            download.on('error', function(err) {
                console.log(err);
            });
            download.on('end', function(output) {
                console.log(output);
            });
        }
    }
}

//};