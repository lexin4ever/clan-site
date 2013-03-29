define([
	'app',
	'angular'
], function(app, angular){
	"use strict;";

	// some setting here
	var settings = {
	};
	// service
	var service = function() {
		return {
			/**
			 * Getter
			 * @param attr {String} Searching key
			 * @return {Mixed} Value of key or null if there is no key.
			 */
			get: function(attr){
				if (settings[attr]) {
					return settings[attr];
				} else {
					// console.log( 'Settings '+attr+' does not exists' );
					return null;
				}
			},
			/**
			 * Setter
			 * @param attr {Mixed} Array with {key: value} or key {String}
			 * @param v {Mixed} {Optional} New value. Must be empty if first key is array.
			 */
			set: function(attr, v){
				var put = function(attr, v){
					settings[attr] = v;
				}
				if (typeof attr == 'object' && typeof v == 'undefined') {
					angular.forEach(attr, function(k,v){
						put(k, v);
					});
				} else {
					put(attr, v);
				}
			}


		}
	};
	service.$inject = [];
	app.factory("Config", service);
});