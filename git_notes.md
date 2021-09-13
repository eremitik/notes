## Basics

git status --- see which branch you're in\
git branch-a --- see all available branches\
git checkout xxx --- switch to xxx branch\
git add . --- stage changes to upload\
git push origin xxx --- pushes to online git repo

## Syncing with master

git checkout master\
git pull\
git checkout feature/xxx-branch\
git merge master

## Pushing xxx-branch to master

git checkout master\
git merge feature/xxx-branch\
git push origin master

## Cloning repo

git clone -b xxx https://\
(-b is branch call, xxx is branch name)

## Cloning specific branch

git clone --single-branch --branch <branchname> <remote-repo>

## First push to github

create repo, copy url\
git init\
git remote add origin "https://github.com/xxx/xxx.git"\
git branch -m master main\
git add .\
git commit -m "xxx"\
git push origin main

## Notes for pushing to github pages

https://github.com/gitname/react-gh-pages

## Changing git remote url

git remote set-url origin **_new url_**\
git remote -v

## Pushing code to new branch xxx

git checkout -b xxx\
git push -u origin xxx\
git add .\
git commit -m “first commit”\
git status (just to check)\
git push (you only need git push here as you already set the origin in step 2)

## To reinstate gitignore file

git rm -r --cached .\
git add .\
git commit -m "hoge hoge"\
got push origin hoge-hoge

## To keep yourbranchname in sync with master

git checkout master\
git pull\
git checkout yourbranchname\
git merge master

## Pulling to latest version of branch

git fetch --all && git reset --hard origin/XXX\
(XXX is the branch name)

## Setup personal token

https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git
