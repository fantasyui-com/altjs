#!/bin/sh

# npm update
# browserify -e index.js -t babelify -t brfs -o alt.js;
# browserify -e example.js -t babelify -t reactify -t brfs -o example.min.js;
browserify -e example.js -t reactify -o example.min.js;
