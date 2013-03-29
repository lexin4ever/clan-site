"use strict;";
define([
	'app',
	'jQuery',
	'css!css/bootstrap/css/bootstrap.min.css',
	'css!css/bootstrap/css/bootstrap-responsive.min.css',
	//common ibx css
	'css!css/common.css'
], function(app, $){
	var directive = function(){
		return {
				restrict:"A",
				transclude:true,
//			template:'<div class="header"></div>' +
//					'<div class="content" ng-transclude></div>' +
//					'<div class="footer"></div>',
				templateUrl: require.toUrl('templates/layout.html'),
				link:function(scope, elm, attrs) {
				}
		}
	}
	directive.$inject = [];
	app.directive("ibxLayout", directive)
});