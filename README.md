# ember-cli-videojs-shim
[![Build Status](https://travis-ci.org/joshuairl/ember-cli-videojs-shim.svg?branch=master)](https://travis-ci.org/joshuairl/ember-cli-videojs-shim)
[![npm Version][npm-badge]][npm]
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-videojs-shim.svg)](http://emberobserver.com/addons/ember-cli-videojs-shim)
[![Ember badge][ember-badge]][embadge]

ES6 accessible module for videojs within your Ember applications.

## Usage

```bash
ember install ember-cli-videojs-shim
```

```js
import videojs from 'videojs';
```

## Settings
Video.js ships with a number of supported languages. To import languages add:

```javascript
...
    'videojs': {
      'languages': [
        'ar'
      ],
    }
...
```

To your ember-cli-build.js file.

## License

ember-cli-videojs-shim shims is [MIT Licensed](https://github.com/joshuairl/ember-cli-videojs-shim/blob/master/LICENSE.md).

[embadge]: http://embadge.io/
[ember-badge]: http://embadge.io/v1/badge.svg?start=2.4.0
[npm]: https://www.npmjs.org/package/ember-cli-videojs-shim
[npm-badge]: https://img.shields.io/npm/v/ember-cli-videojs-shim.svg?style=flat-square
