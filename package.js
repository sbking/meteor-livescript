Package.describe({summary: "Add support for LiveScript, a more functional take on Coffeescript."});

Npm.depends({
  'LiveScript': '1.1.1'
});

var livescript_handler = function (bundle, source_path, serve_path, where) {
  var fs = Npm.require('fs'),
      path = Npm.require('path'),
      livescript = Npm.require('LiveScript'),
      serve_path = serve_path + '.js',
      contents = fs.readFileSync(source_path);
  options = {
    bare: true
  };
  try {
    contents = livescript.compile(contents.toString('utf8'), options);
  } catch (e) {
    return bundle.error(
      source_path + ':' +
      (e.location ? (e.location.first_line + ': ') : ' ') +
      e.message
    );
  }
  contents = new Buffer(contents);
  bundle.add_resource({
    type: 'js',
    path: serve_path,
    data: contents,
    where: where
  });
};

Package.register_extension('ls', livescript_handler);