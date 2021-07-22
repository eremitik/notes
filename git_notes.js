/*

git status --- see which branch you're in
git branch-a --- see all available branches
git checkout xxx --- switch to xxx branch
git add . --- stage changes to upload
git push origin xxx --- pushes to online git repo

[to sync with master]
git checkout master
git pull
git checkout feature/xxx-branch
git merge master

[to push xxx-branch to master]
git checkout master
git merge feature/xxx-branch
git push origin master

[git cloning repo]
git clone -b xxx https://
(-b is branch call, xxx is branch name

[first push to github]
create repo, copy url
git init
git remote add origin https://github.com/xxx/xxx.git
git branch -m master main
git add .
git commit -m "xxx"
git push origin main

[notes for pushing to github pages]
https://github.com/gitname/react-gh-pages

[change git remote url]
git remote set-url origin ***new url***
git remote -v

[pushing code to pp branch]
git checkout -b yourname-xxxx
git push -u origin yourname-xxx
git add .
git commit -m “our first commit”
git status (---- just to check ----)
git push (--- you only need git push here as you already set the origin in step 2)

[to reinstate gitignore file]
git rm -r --cached .
git add .
git commit -m "hoge hoge"
got push origin hoge-hoge

*/
