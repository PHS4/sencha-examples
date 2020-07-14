#!/bin/sh

# ./sencha_cmd $1 $2
# ./sencha_cmd classic production
# ./sencha_cmd modern production
echo $1;
echo $2;

TOOLKIT=$1;
APP_ENV=$2;
APP_DIR=app-"$TOOLKIT";
echo "Movng into $APP_DIR to build $TOOLKIT for $APP_ENV" && 
cd $APP_DIR && 
echo "Building in" $PWD &&
echo ":::: CLEAN START ::::" && 
# sencha app clean &&
echo ":::: CLEAN DONE ::::" && 

echo ":::: BUILD START ::::" && 
# sencha app build $BUILD_ENV &&
echo ":::: BUILD DONE ::::" &&

echo "Copy $pwd/app to ../build-$TOOLKIT/$APP_ENV/Demo/"


