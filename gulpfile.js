var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;
var browserSync = require('browser-sync');
var webpack = require('webpack');

/**
 * CONFIG
 */
var prod = !!(argv.prod);

var isReload = false;

// src & dest
var dist = {
	js 	: './public/js',
	css : './public/css'
};


gulp.task('bundle', function() {
	var config = require("./webpack.config.js");

	webpack(config).run(function(err, stats) {
		if (err) {
			console.log('Error', err);
		}
		else {
			console.log(stats.toString());
		}
		return;
	});
});


var fs = require('fs');
var path = require('path');

gulp.task('test', function() {
	var config = require("./webpack.config.js");

	return;


	var dir = './resources/assets/js/pages';

	var files = fs.readdirSync(dir)
  	.filter(function(file) {
        return fs.statSync(path.join(dir, file)).isFile() && path.extname(file) === '.js';
  	});

	files.map(function(file) {
		console.log(file.replace('.js', ''));	
	});
});


gulp.task('watch', function() {
	gulp.watch(['./resources/assets/js/**/*.js', './resources/assets/less/**/*.less'], ['bundle']);
});


// default task
gulp.task('default', ['bundle']);