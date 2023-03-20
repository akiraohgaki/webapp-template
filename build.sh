#!/bin/bash

set -eu

SRC_DIR='src'
DST_DIR='public'
INCLUDES=(index.html favicon.ico icon.png apple-touch-icon.png assets)

if [ -d "${DST_DIR}" ]; then
  rm -rf "${DST_DIR}"
fi

mkdir "${DST_DIR}"

for entry in "${INCLUDES[@]}"; do
  if [ -e "${SRC_DIR}/${entry}" ]; then
    cp -a "${SRC_DIR}/${entry}" "${DST_DIR}/${entry}"
  fi
done

deno task build

exit 0
