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
git commit -m "xxx"
git push origin master

[notes for pushing to github pages]
https://github.com/gitname/react-gh-pages
*/
