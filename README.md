# Gulpfile - A Gulp Setup Example

This is a quick example to help you setup [gulpjs](http://gulpjs.com/).

## How to Use

Open your terminal and cd into this (gulpfile) directory. All you have to do now is to type "gulp" and start writing JavaScript, Less, Sass or add images in assets/src/. Gulp will run when a change occurs and place your compiled and minified files into assets/build/. To exit gulp hit "crtl+c".

Sometimes images that you add to assets/scr/img will not be processed. In that case I exit "gulp watch" and enter "gulp img" into the terminal.

To better understand how gulp works I recommend checking out [this video series](http://www.youtube.com/playlist?list=PLLnpHn493BHE2RsdyUNpbiVn-cfuV7Fos) by [LevelUpTuts](http://leveluptuts.com/).

## Requirements

- Maybe a Mac. I have not tested this on windows yet.

You then also have to have these technologies installed globally (on your computer that is).

- [nodejs](http://nodejs.org/) (install first)
- [gulpjs](http://gulpjs.com/)
- [BrowserSync](http://www.browsersync.io/)
- [LessCSS](http://lesscss.org/)
- [Sass](http://sass-lang.com/) (requires ruby)

And these you must have installed in the directory called "node_modules".

- [gulpjs](http://gulpjs.com/)
- [gulp-concat](https://www.npmjs.org/package/gulp-concat)
- [gulp-imagemin](https://www.npmjs.org/package/gulp-imagemin)
- [gulp-less](https://www.npmjs.org/package/gulp-less)
- [gulp-minify-css](https://www.npmjs.org/package/gulp-minify-css)
- [gulp-plumber](https://www.npmjs.org/package/gulp-plumber)
- [gulp-rename](https://www.npmjs.org/package/gulp-rename)
- [gulp-ruby-sass](https://www.npmjs.org/package/gulp-ruby-sass)
- [gulp-uglify](https://www.npmjs.org/package/gulp-uglify)

## TODOs

- Less has no compiler function in gulpfile.js
