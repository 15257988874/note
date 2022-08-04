# branch

```
git branch 查看本地分支
git branch -a 查看远程分支
git branch xx 创建xx本地分支
git checkout xx 切换到xx分支
git checkout -b xx 创建xx本地分支并切换到此分支
git checkout -b xx origin/aa 根据远程aa分支创建本地xx分支
git branch -d xxx 删除本地xx分支
git push origin -d xx 删除远程xx分支
git merge xx 合并分支
git branch -m xxx aaa 分支xxx,修改为 aaa 
git push origin xx 创建远程分支(本地分支push到远程)

// 通过checkout 跟上commitId 即可创建制定commit之前的本地分支
git checkout commitId -b 本地新branchName

Git本地分支与远程分支关联
git branch --set-upstream-to=origin/远程分支 本地分支
```
