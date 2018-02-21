var gulp = require('gulp');
var connect = require("gulp-connect")
//复制src文件夹下所有文件
gulp.task("copysrc",function(){
	return gulp.src("src/**/*").pipe(gulp.dest("dist"));
});

gulp.task("copyhtml",function(){
	return gulp.src("src/html/*.html").pipe(gulp.dest("dist/html")).pipe(connect.reload());
});

gulp.task("copycss",function(){
	return gulp.src("src/css/*.css").pipe(gulp.dest("dist/css")).pipe(connect.reload());
});

gulp.task("copyjs",function(){
	return gulp.src("src/js/*.js").pipe(gulp.dest("dist/js")).pipe(connect.reload());
});

gulp.task("mywatch",function(){
	gulp.watch("src/html/*.html",["copyhtml"]);
	gulp.watch("src/css/*.css",["copycss"]);
	gulp.watch("src/js/*.js",["copyjs"]);

});
gulp.task("server",function(){
	connect.server({
		port:8000,
		root:["dist"],//选择服务器的根目录
		livereload:true
	});
});

gulp.task("default",["mywatch","server"]);