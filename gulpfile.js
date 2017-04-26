var gulp = require('gulp'),
	// jshint = require('gulp-jshint'),
	// jshintReporter = require('jshint-stylish'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	inject = require('gulp-inject'),
	replace = require('gulp-replace-task'),
	nodemon = require('nodemon'),
	browserSync = require('browser-sync').create();
	var reload = browserSync.reload;
/*
 * Create variables for our project paths so we can change in one place
 */
var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json'],
	'js': ['./public/js/**/*.js'],
	'srcJsAssets': ['./public/js/app/**/*.js'],
	'sass': ['./public/styles/**/*.scss'],
	'hbs': ['./templates/**/*.hbs']
};


// gulp lint
// gulp.task('lint', function(){
// 	gulp.src(paths.src)
// 		.pipe(jshint())
// 		.pipe(jshint.reporter(jshintReporter));
//
// });

// gulp watcher for lint
// gulp.task('watch:lint', function () {
// 	gulp.src(paths.src)
// 		.pipe(watch())
// 		.pipe(jshint())
// 		.pipe(jshint.reporter(jshintReporter));
// });

var port = 3010;
gulp.task('run-server', function(){
	var nodeOptions = {
		script: 'keystone.js',
		env:{
			'PORT': port,
			'NODE_ENV': 'dev'
		},
		ext:'hbs js'
	};
	return nodemon(nodeOptions)
		.on('start',function(){
			startBrowserSync();
		})
		.on('restart',function(){
			console.log('server restarted!');
		});
});
function startBrowserSync(){
	if(browserSync.active)
		return;

	browserSync.init({
		proxy: 'localhost:' + port,
		port: 3000
		//injectChanges:true,
		//logFileChanges:true,
		//logLevel:'debug'
	});
	gulp.watch(paths.sass, ['sass']);
	gulp.watch(paths.js, browserSync.reload);
	gulp.watch(paths.hbs, browserSync.reload);
}

gulp.task('inject',function(){
	var target = gulp.src('./templates/views/partials/js-footer.hbs');
	// it's not necessary to read the files (will speed up things), we're only after their paths:
	//var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], {read: false});
	var sources = gulp.src(paths.srcJsAssets, {read:false});
	return target.pipe(inject(sources))
		.pipe(gulp.dest('./templates/views/partials'))
		.pipe(replace({
			patterns: [
				{
					match: /\/public/g,
					replacement: ''
				}
			]
		}))
		.pipe(gulp.dest('./templates/views/partials'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src(paths.sass)
		.pipe(sass({
			onError: startBrowserSync
		}))
		.pipe(gulp.dest("public/styles"))
		.pipe(browserSync.stream());
});
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});
