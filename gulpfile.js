/**
 * Tetris Concats
 *
 */

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('ambient-tetris', function() {
  gulp.src(['./core/js/utils.js', './ambient/custom/color_manager.js', './core/js/grid.js', './ambient/custom/piece.js', './core/js/game_manager.js', './ambient/custom/random_piece_generator.js', './core/js/ai.js', './core/js/updater.js'])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./ambient/js/'))
});

gulp.task('classic-tetris', function() {
  gulp.src(['./classic/custom/draw_functions.js', './core/js/grid.js', './classic/custom/piece.js', './classic/custom/game_manager.js', './classic/custom/random_piece_generator.js', './core/js/ai.js', './core/js/updater.js'])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./classic/js/'))
});

gulp.task('colored-classic-tetris', function() {
  gulp.src(['./colored_classic/custom/draw_functions.js', './core/js/grid.js', './colored_classic/custom/piece.js', './colored_classic/custom/game_manager.js', './colored_classic/custom/random_piece_generator.js', './core/js/ai.js', './core/js/updater.js'])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./colored_classic/js/'))
});

gulp.task('watch', function() {
  gulp.watch(['./ambient/custom/*', './core/*'], ['ambient-tetris']);
  gulp.watch(['./classic/custom/*', './core/js/*'], ['classic-tetris']);
  gulp.watch(['./colored_classic/custom/*', './core/js/*'], ['colored-classic-tetris']);
});
