"use strict;";
define([
	'app'
], function(app){
	var controller = function($scope){
		$scope.foo = 'bar';
	}
	controller.$inject = ["$scope"];
	app.controller("template", controller)
});