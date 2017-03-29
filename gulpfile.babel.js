'use strict';

const gulp = require('gulp-param')(require('gulp'), process.argv),
  nodemon = require('gulp-nodemon'),
  replace = require('gulp-replace'),
  fileExists = require('file-exists'),
  chalk = require('chalk'),
  rename = require("gulp-rename");

gulp.task('make', (controller, model) => {
  const make = (controller) ? controller : model;
  const makeStr = (controller) ? 'controller' : 'model';
  const indexChar = make.lastIndexOf("/");
  const file = make.substr(indexChar + 1);
  const folder = make.substr(0, indexChar);
  const extraFile = `${makeStr}s/${make}.js`;
  const blueprint = `core/blueprint/${makeStr}.js`;

  if (!fileExists(blueprint)) console.error(chalk.red(`Error: ${makeStr} blueprint not found`));

  if (fileExists(extraFile)) console.error(chalk.red(`Error: ${make} already exist! Pls,try other name`));
  else {
    gulp.src([blueprint])
      .pipe(rename(file + '.js'))
      .pipe(replace(makeStr.charAt(0).toUpperCase() + makeStr.slice(1), file))
      .pipe(gulp.dest(makeStr + 's/' + folder));
    console.log(chalk.green(`Generate ${file} Success`));
  }
});

gulp.task('serve', () => {
  nodemon({
    script: 'core/server.js'
    , ext: 'js html'
    , env: {'NODE_ENV': 'development'}
  })
});

