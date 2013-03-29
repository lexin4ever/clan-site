"use strict";

require.config({
	baseUrl: '../',
	paths: {
		libs: "js/libs",
		app: "js/apps/app",
		widgets: "js/widgets",
		services: "js/services",
		directives:"js/directives",
		filters:"js/filters",
		templates: "templates",
		angular: 'js/libs/angular/angular',
		jQuery: 'js/libs/jquery/jquery'
	},
	urlArgs: 'v=0.01'
});

require([
	'angular',
	'jQuery',

	'app',
	'widgets/layout'
], function(angular, $, app){

	angular.bootstrap(document, ['Application']);
	$('.mainContainer').show();
	$('.mainloader').remove();
});
