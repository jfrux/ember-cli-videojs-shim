/* jshint node: true */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const map = require('broccoli-stew').map;

module.exports = {
  name: 'videojs',

  included: function(app) {
    this._super.included.apply(this, arguments);

      let options = app.options.videojs || {};

      app.import({
        development: path.join('vendor/video-js.css'),
        production:  path.join('vendor/video-js.min.css')
      });

      app.import(path.join('vendor/font/VideoJS.eot'), { destDir: 'assets/font' });
      app.import(path.join('vendor/font/VideoJS.svg'), { destDir: 'assets/font' });
      app.import(path.join('vendor/font/VideoJS.ttf'), { destDir: 'assets/font' });
      app.import(path.join('vendor/font/VideoJS.woff'), { destDir: 'assets/font' });

      app.import('vendor/ember-cli-videojs-shim/shims.js', {
        exports: {
          videojs: ['default']
        }
      });

      app.import({
        development: path.join('vendor/video.js'),
        production:  path.join('vendor/video.min.js')
      });

      (options.languages || []).forEach(function(language) {
        app.import(path.join('vendor/lang/' + language + '.js'));
      });

      app.import(path.join('vendor/video-js.swf'), { destDir: 'assets' });
  },

  treeForVendor(vendorTree) {
    let trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    let src = path.join(path.dirname(require.resolve('video.js')));

    let videojsLib = new Funnel(src, {

      include: ['lang/*', '*.js']
    });

    videojsLib = map(videojsLib, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);
    trees.push(videojsLib);

    let videojsAssets = new Funnel(src, {
      exclude: ['lang/*', '*.js', '*.zip', 'examples', 'alt']
    });

    trees.push(videojsAssets);

    return new MergeTrees(trees);
  },
};
