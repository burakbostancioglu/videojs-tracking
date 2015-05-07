/*! videojs-tracking - v0.0.0 - 2015-5-7
 * Copyright (c) 2015 burakostancioglu, rustylarner
 * Licensed under the Apache-2.0 license. */
(function(window, videojs) {
  'use strict';

  var defaults = {
        option: true
      },
      tracking;

  /**
   * Initialize the plugin.
   * @param options (optional) {object} configuration for the plugin
   */
  tracking = function(options) {
    var settings = videojs.util.mergeOptions(defaults, options),
        player = this;

    // TODO: write some amazing plugin code
  };

  // register the plugin
  videojs.plugin('tracking', tracking);
})(window, window.videojs);
