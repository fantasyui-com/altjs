#!/bin/sh

# npm update
browserify -e index.js -t babelify -t brfs -o bundle.js;
