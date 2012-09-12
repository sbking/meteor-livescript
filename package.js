Package.describe({
	summary : "Add support for LiveScript, a more functional take on Coffeescript."
});

var ls = require('LiveScript');
var fs = require('fs');

Package.register_extension("ls", function(bundle, source_path, serve_path, where) {
	serve_path = serve_path + '.js';

	var contents = fs.readFileSync(source_path);
	var options = {
		bare : true
	};
	contents = new Buffer(ls.compile(contents.toString('utf8'), options));

	bundle.add_resource({
		type : "js",
		path : serve_path,
		data : contents,
		where : where
	});
}); 