#!/usr/bin/env bash
echo "Start to publish..."
if [ $1 ]
    then
    git commit -am $1
fi
git add .
git commit -am 'gh'
git subtree push --prefix dist yuan gh-pages
git push yuan master
echo "Success";
