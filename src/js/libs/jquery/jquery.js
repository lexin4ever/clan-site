requirejs.config({
	shim: {
		'libs/jquery/jquery-ui.min': ['libs/jquery/jquery.min']
	}
});

define([
	'libs/jquery/jquery.min',
	'libs/jquery/jquery-ui.min',
	'css!js/libs/jquery/smoothness/jquery-ui.custom.css'
], function () {
	console.info("jQuery: ", $);
	return $;
//	return $.noConflict(true);
});