# 仓库

```
检出仓库： git clone url

查看远程仓库： git remote -v

添加远程仓库： git remote add [name] [url]

删除远程仓库： git remote rm [name]

修改远程仓库： git remote set-url --push [name] [newUrl]

拉取远程仓库： git pull [remoteName] [localBranchName]

推送远程仓库： git push [remoteName] [localBranchName]

强制推送: git push origin branch-name --force

git fetch --all && git reset --hard origin/master && git pull

上述name一般为origin
```

# git pull 默认加上 rebase 功能

```
1. 指定分支添加
git config branch.dev.rebase true
或
git config pull.rebase true
请使用以上命令时将 "dev" 修改成您自己本地的分支名字.
提示：
 必须cd到你工程的目录下，才能更改分支的配置；
 可以使用  git branch 命令， 列出您当前仓库中的所有本地分支

2. 如果你觉得所有的分支都应该用rebase，那就设置：
 git config --global branch.autosetuprebase always
 或
 git config --global pull.rebase true
```
