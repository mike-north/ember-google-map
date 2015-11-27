import Ember from 'ember';

var computed = Ember.computed;

/**
 * @class GoogleMapInfoWindowsController
 * @extends Ember.ArrayController
 */
export default Ember.Controller.extend({
  itemController: computed.alias('parentController.infoWindowController'),
  model:          computed.alias('parentController.infoWindows')
});
