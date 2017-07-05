#!/usr/bin/env bash
echo "Start to publish..."
npm run build:github
git add .
if [ $1 ]
    then
    git commit -am $1
fi
git commit -am 'gh'
git subtree add --prefix dist yuan gh-pages
git subtree pull --prefix dist yuan coding-pages
git subtree push --prefix dist yuan gh-pages
git push yuan master
echo "Success";
