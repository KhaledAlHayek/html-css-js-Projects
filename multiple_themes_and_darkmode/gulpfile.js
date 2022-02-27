const gulp = require("gulp"),
      sass = require("gulp-sass")(require("sass")),
      concat = require("gulp-concat"),
      prefix = require("gulp-autoprefixer"),
      srcmaps = require("gulp-sourcemaps");

gulp.task("css", () => {
  return gulp.src("./multiple_themes_and_darkmode/sass/index.sass")
  .pipe(srcmaps.init())
  .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
  .pipe(prefix("last 2 versions"))
  .pipe(concat("index.css"))
  .pipe(srcmaps.write("."))
  .pipe(gulp.dest("./multiple_themes_and_darkmode/css/"));
});

gulp.task("watch", () => {
  gulp.watch("./multiple_themes_and_darkmode/sass/index.sass", gulp.series("css"));
})
