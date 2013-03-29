"use strict;"

requirejs.config({
	shim: {
		'libs/angular-ui-0.4.0/build/angular-ui.min': ['libs/angular/angular.min', 'libs/jquery/jquery-ui.min'],
		'libs/angular/angular.min': ['jQuery']
	}
});

define([
	'jQuery',
	'libs/angular/angular.min',
	'libs/jquery/jquery-ui.min',
	'libs/angular-ui-0.4.0/build/angular-ui.min',
	'css!js/libs/angular-ui-0.4.0/build/angular-ui.min.css'
], function () {
	return angular;
});