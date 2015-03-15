var gulp = require('gulp');
var gulpWebpack = require('gulp-webpack');
var webpack = require('webpack');

var src = 'src/*';

gulp.task('webpack', function () {
  gulp.src(src)
    .pipe(gulpWebpack({
      entry : './src/app.jsx',
      output: {
        path: __dirname,
        filename: 'main.js',
        publicPath: '/'
      },
      module: {
        loaders: [
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
          { test: /\.jsx$/, loader: 'jsx-loader?harmony'},
          { test: /\.jpg$/, loader: 'file' },
          { test: /\.png$/, loader: 'url-loader?mimetype=image/png' }
        ]
      },
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        })
      ]
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch(src, ['webpack']);
});

gulp.task('default', ['webpack']);
