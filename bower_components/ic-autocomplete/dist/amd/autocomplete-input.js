define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    var alias = Ember.computed.alias;

    __exports__["default"] = Ember.TextField.extend({

      classNames: 'ic-autocomplete-input',

      attributeBindings: [
        'aria-autocomplete',
        'aria-expanded',
        'aria-owns',
        'aria-activedescendant',
        'role'
      ],

      role: 'combobox',

      'aria-autocomplete': 'both',

      autocomplete: alias('parentView'),

      'aria-expanded': function() {
        return this.get('autocomplete.isOpen')+'';
      }.property('autocomplete.isOpen'),

      'aria-owns': alias('parentView.elementId'),

      'aria-activedescendant': alias('parentView.selected.elementId'),

      focusIn: function() {
        if (this.get('autocomplete.preventFocusInHandler')) {
          return;
        }
        if (this.get('autocomplete.open')) {
          this.get('autocomplete').close();
        } else {
          this.get('autocomplete').open();
        }
      }

    });
  });