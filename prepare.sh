#!/bin/sh

#set -eu

rm -rf public
mkdir -p public
cp -a src/*.html src/*.ico src/*.png src/assets public/

exit 0
