# Gulpfile - A Gulp Setup Example

This is a quick example to help you setup [gulpjs](http://gulpjs.com/).

## How to Use

Open your terminal and cd into this (gulpfile) directory. All you have to do now is to type "gulp" and start writing JavaScript, Less, Sass or add images in assets/src/. Gulp will run when a change occurs and place your compiled and minified files into assets/build/. To exit gulp hit "crtl+c".

For [BrowserSync](http://www.browsersync.io/) to work, you need to access your project through "localhost:8888" or change the proxy settings in the 'sync' function within gulpfile.js.

Sometimes images that you add to assets/scr/img while running gulp will not be processed automatically. In that case I recommend you exit gulp and run the "gulp img" task manually.

To learn how gulp works I recommend checking out [this video series](http://www.youtube.com/playlist?list=PLLnpHn493BHE2RsdyUNpbiVn-cfuV7Fos) by [LevelUpTuts](http://leveluptuts.com/).

## Requirements

Have these technologies installed globally – on your computer that is.

- [nodejs](http://nodejs.org/) (install first)
- [gulpjs](http://gulpjs.com/)
- [BrowserSync](http://www.browsersync.io/)
- [LessCSS](http://lesscss.org/)
- [Sass](http://sass-lang.com/) (requires ruby)

And have these installed in your project's "node_modules" directory.

- [gulpjs](http://gulpjs.com/)
- [gulp-concat](https://www.npmjs.org/package/gulp-concat)
- [gulp-imagemin](https://www.npmjs.org/package/gulp-imagemin)
- [gulp-less](https://www.npmjs.org/package/gulp-less)
- [gulp-minify-css](https://www.npmjs.org/package/gulp-minify-css)
- [gulp-plumber](https://www.npmjs.org/package/gulp-plumber)
- [gulp-rename](https://www.npmjs.org/package/gulp-rename)
- [gulp-ruby-sass](https://www.npmjs.org/package/gulp-ruby-sass)
- [gulp-uglify](https://www.npmjs.org/package/gulp-uglify)

Please note: I have not tested this project on windows yet.

## TODOs

- Less has no compiler function in gulpfile.js
