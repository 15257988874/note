# git commit

## 正常提交

```
git commit -m 'xxx'
```

## 撤销 commit

```
git reset --soft HEAD^
撤回commit操作，您写的代码仍然保留

HEAD^的意思是上一个版本，也可以写成HEAD~1
如果你进行了2次commit，想都撤回，可以使用HEAD~2

参数说明
--mixed
意思是：不删除工作空间改动代码，撤销commit，并且撤销git add . 操作
这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。


--soft
不删除工作空间改动代码，撤销commit，不撤销git add .

--hard
删除工作空间改动代码，撤销commit，撤销git add .

注意完成这个操作后，就恢复到了上一次的commit状态。

顺便说一下，如果commit注释写错了，只是想改一下注释，只需要：
git commit --amend

git commit -amend -m "new message"
此时会进入默认vim编辑器，修改注释完毕后保存就好了
```

## 绕过限制钩子

```
// 默认情况下，会运行 pre-commit 和 commit-msg 挂钩。当给出任何一个--no-verify或时-n，这些都被绕过
git commit -n -m 'xxx' 等同于 git commit --no-vertify -m 'xxx'

```
