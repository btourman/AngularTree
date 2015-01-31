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
            /*fs.mkdir(name + '/' + children['name'], function(err) {
                if (err) console.error(err);
                else console.log(name + '/' + children['name'] + " directory was created");
            });*/
        }
    }
}