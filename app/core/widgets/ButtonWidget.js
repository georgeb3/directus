define([
  'app',
  'backbone',
  'underscore'
],
function(app, Backbone, _) {

  'use strict';

  return Backbone.Layout.extend({

    template: 'core/widgets/button',

    tagName: 'div',

    attributes: {
      class: 'action widget widget-button'
    },

    events: function() {
      return this.getEvents();
    },

    serialize: function() {
      var options = this.options.widgetOptions;

      // @TODO: Add library that handle class uniqueness and spaces.
      options.buttonClass += ' action js-action-button';
      if (options.help) {
        options.buttonClass += ' help';
      }

      return options;
    },

    afterRender: function() {
      if (this.options.widgetOptions && this.options.widgetOptions.active) {
        $(this.el).addClass('active');
      }
    },

    getEvents: function() {
      return this._events;
    },

    initialize: function(options) {
      this._events = {};

      if (_.isFunction(options.onClick)) {
        this._events['click .js-action-button'] = options.onClick;
      }
    }
  });
});