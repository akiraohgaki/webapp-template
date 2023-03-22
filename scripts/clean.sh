#!/bin/sh

DIST_DIR="${1}"
INCLUDES="${2}"

if [ -d "${DIST_DIR}" ]; then
  rm -rf "${DIST_DIR}"
fi

mkdir -p "${DIST_DIR}"

cp -a ${INCLUDES} "${DIST_DIR}"

exit 0
