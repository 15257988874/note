# git rebase

1. 合并多个 commit 为一个完整 commit

不指定[endpoint]，则该区间的终点默认是当前分支 HEAD 所指向的 commit(注：该区间指定的是一个前开后闭的区间)

```
 git rebase -i  [startpoint]  [endpoint]
```

> 1. pick：保留该 commit（缩写:p）
> 2. reword：保留该 commit，但我需要修改该 commit 的注释（缩写:r）
> 3. edit：保留该 commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）
> 4. squash：将该 commit 和前一个 commit 合并（缩写:s）
> 5. fixup：将该 commit 和前一个 commit 合并，但我不要保留该提交的注释信息（缩写:f）
> 6. exec：执行 shell 命令（缩写:x）
> 7. drop：我要丢弃该 commit（缩写:d）

2. 将某一段 commit 粘贴到另一个分支上

> 注:因为[startpoint] [endpoint]指定的是一个前开后闭的区间，为了让这个区间包含 startpoint 提交，我们将区间起始点向后退了一步。

```
git rebase   [startpoint]   [endpoint]  --onto  [branchName]
```
