import Ember from 'ember';
import layout from '../templates/components/video-test';

import videojs from 'videojs';

export default Ember.Component.extend({
  layout,
  tagName: 'video',
  classNames: ['video-js'],
  attributeBindings:['data-setup'],

  'data-setup': Ember.computed(function() {
    return '{"controls": true, "autoplay": false, "preload": "auto"}';
  }),

  didInsertElement() {
    this._super(...arguments);
    videojs(this.elementId);
  }
});

