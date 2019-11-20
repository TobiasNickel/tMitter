/**
 * @author Tobias Nickel
 * @description minimalistic emitter system 
 */

 /**
  * gives an object the ability to handle emittions by defining 4 attributes
  * ._events, .on, .off and .trigger
  */
	/**
	 *	method that you will want to write in the documentation of your class/object.
	 *  together with all the events you trigger by yourself
	 *@param event {string} name of the event
	 *@param callback {function} the function to be called when the event is triggered
	 */
	function on(event, callback) {
		event = event.toLowerCase();
		if (!(event in this._events))
			this._events[event] = [];
		if (this._events[event].indexOf(callback) === -1)
			this._events[event].push(callback);
	}
	/**
	 *	method to remove an eventlistener or even all.
	 *@param event {string} name of the event where the call back should be removed
	 *@param callback {function} that will be removed from the listener
	 */
	function off(event, callback) {
		if (!event) {
			this._events = {};
			return;
		}
		if (!callback) {
			delete this._events[event];
		} else {
			var index = this._events[event].indexOf(callback);
			if (index!=-1) {
				this._events[event].splice(index,1);
			}
		}
	}
		/**
	 *  executing all listener that are registered on the event
	 *@param event {string} name of the event to be triggered
	 *@args args {mixed} anything that you want to be passed to the listeners callback
	 */
	function trigger(event, args) {
		if (!event)
			return;
		if (!this._events[event])
			return;
		var i = this._events[event].length;
		while (i--) {
			this._events[event][i](args);
		}
	};
module.exports = function tMitter(object){
		//container to store the listener/callbacks
		object._events= {};
		object.on= on;
		object.off= off;
		object.trigger= trigger;
  		return object;
	};
