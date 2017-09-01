import Ember from 'ember';
import layout from '../templates/components/video-test';

import videojs from 'videojs';

export default Ember.Component.extend({
  layout,
  didInsertElement() {
    this._super(...arguments);
    videojs(document.querySelector('.video-js'));
  }
});

