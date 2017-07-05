#!/usr/bin/env bash
echo "Start to publish..."
rm -rf dist
git subtree add --prefix dist yuan gh-pages
npm run build:github
git add .
if [ $1 ]
    then
    git commit -am $1
fi
git commit -am 'gh'
git subtree pull --prefix dist yuan coding-pages
git subtree push --prefix dist yuan gh-pages
git push yuan master
echo "Success";
