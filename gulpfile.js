var gulp = require('gulp');
var uglify = require('gulp-uglify-es').default;
var del = require('del');

// js压缩
gulp.task("js", function () {
    return (function(){
        gulp.src(['background.js','content_script.js'])
        .pipe(uglify({
            mangle: true,               // 是否修改变量名，默认为 true
            compress: true,             // 是否完全压缩，默认为 true
        }))
        .pipe(gulp.dest("dist"));

    })()

});

gulp.task('copy', function(){
    return (function(){
        gulp.src('./manifest.json')
            .pipe(gulp.dest('./dist'));
        gulp.src('./markdown.png')
            .pipe(gulp.dest('./dist'));
        gulp.src('./options.html')
            .pipe(gulp.dest('./dist'));
    })()
})

gulp.task('clean', function(){
    del('./dist'); 
})

gulp.task('default', ['js', 'copy']);




