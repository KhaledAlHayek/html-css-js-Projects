const gulp = require("gulp"),
      sass = require("gulp-sass")(require("sass")),
      concat = require("gulp-concat"),
      prefix = require("gulp-autoprefixer"),
      srcmaps = require("gulp-sourcemaps");

gulp.task("css", () => {
  return gulp.src("./sass/index.sass")
  .pipe(srcmaps.init())
  .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
  .pipe(prefix("last 2 versions"))
  .pipe(concat("index.css"))
  .pipe(srcmaps.write("."))
  .pipe(gulp.dest("./css/"));
});

gulp.task("watch", () => {
  gulp.watch("./sass/index.sass", gulp.series("css"));
})
