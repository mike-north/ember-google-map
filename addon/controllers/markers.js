import Ember from 'ember';

var computed = Ember.computed;

/**
 * @class GoogleMapMarkersController
 * @extends Ember.ArrayController
 */
export default Ember.Controller.extend({
  itemController: computed.alias('parentController.markerController'),
  model:          computed.alias('parentController.markers')
});
