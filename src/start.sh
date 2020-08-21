#!/bin/#!/usr/bin/env bash

if test $# -lt 0; then
    echo "Gib den Pfad <nest-install> an"
else
    NESTPATH=$1
    echo "${NESTPATH}"
    . ${NESTPATH}/bin/nest_vars.sh
    export NEST_SERVER_RESTRICTION_OFF=TRUE
    bash ${NESTPATH}/bin/nest-server start -o
fi
