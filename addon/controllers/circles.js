import Ember from 'ember';

var computed = Ember.computed;

/**
 * @class GoogleMapCirclesController
 * @extends Ember.ArrayController
 */
export default Ember.Controller.extend({
  itemController: computed.alias('parentController.circleController'),
  model:          computed.alias('parentController.circles')
});
