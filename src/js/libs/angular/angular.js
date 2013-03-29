"use strict;"

requirejs.config({
	shim: {
		'libs/angular/resource': ['libs/angular/angular.min'],
		'libs/angular-ui-0.4.0/angular-ui-amd': ['libs/angular/angular.min'],
		'libs/angular/angular.min': ['jQuery']
	}
});

define([
	'libs/angular/angular.min',
	'libs/angular/resource',
	'libs/angular-ui-0.4.0/angular-ui-amd'
], function () {
	console.info("Angular: ", angular);
	return angular;
});