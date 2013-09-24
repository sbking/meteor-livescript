Package.describe({summary: "Add support for LiveScript, a more functional take on Coffeescript."});

Package._transitional_registerBuildPlugin({
  name: "compileLiveScript",
  use: [],
  sources: [
    'plugin/compile-livescript.js'
  ],
  npmDependencies: {"LiveScript": "1.2.0"}
});
