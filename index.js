/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'videojs',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    if (!process.env.EMBER_CLI_FASTBOOT) {
      var options = app.options.videojs || {};

      app.import({
        development: path.join(app.bowerDirectory, 'video.js/video-js.css'),
        production:  path.join(app.bowerDirectory, 'video.js/video-js.min.css')
      });

      app.import(path.join(app.bowerDirectory, 'video.js/font/VideoJS.eot'), { destDir: 'assets/font' });
      app.import(path.join(app.bowerDirectory, 'video.js/font/VideoJS.svg'), { destDir: 'assets/font' });
      app.import(path.join(app.bowerDirectory, 'video.js/font/VideoJS.ttf'), { destDir: 'assets/font' });
      app.import(path.join(app.bowerDirectory, 'video.js/font/VideoJS.woff'), { destDir: 'assets/font' });

      app.import('vendor/ember-cli-videojs-shim/shims.js', {
        exports: {
          videojs: ['default']
        }
      });

      app.import({
        development: path.join(app.bowerDirectory, 'video.js/video.js'),
        production:  path.join(app.bowerDirectory, 'video.js/video.min.js')
      });

      (options.languages || []).forEach(function(language) {
        app.import(path.join(app.bowerDirectory, 'video.js/lang/' + language + '.js'));
      });

      app.import(path.join(app.bowerDirectory, 'video.js/video-js.swf'), { destDir: 'assets' });
    }
  }
};
