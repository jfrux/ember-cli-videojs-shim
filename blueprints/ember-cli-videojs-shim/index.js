/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {
    // allows to run ember -g ember-cli-videojs-shim and not blow up
    // because ember cli normally expects the format
    // ember generate <entityName> <blueprint>
  },
  afterInstall: function(options) {
    return this.addBowerPackageToProject('video.js', 'https://github.com/videojs/video.js/releases/download/v6.0.1/video-js-6.0.1.zip');
  }
};
