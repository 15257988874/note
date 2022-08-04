# git tag

- 命令 git tag <tagname>可以创建一个本地标签
- 命令 git push origin <tagname>可以推送一个本地标签；
- 命令 git push origin --tags 可以推送全部未推送过的本地标签；
- 命令 git tag -d <tagname>可以删除一个本地标签；
- 命令 git push origin :refs/tags/<tagname>可以删除一个远程标签。

## 创建 tag

```
git tag <tagName> //创建本地tag
git push origin <tagName> //推送到远程仓库
若存在很多未推送的本地标签，你想一次全部推送的话：
git push origin --tags

以上是基于本地当前分支的最后的一个commit 创建的 tag ，但是如果不想以最后一个，只想以某一个特定的提交为tag ，也是可以的，只要你知道commit 的id。

git tag -a tagName -m "xxxxxxx"
加上-a参数来创建一个带备注的tag，备注信息由-m指定。如果你不传入-m，那么在创建过程中系统会自动打开编辑器让你填写备注信息。


git log --pretty=oneline //查看当前分支的提交历史 里面包含 commit id

git tag -a <tagName> <commitId>
```

## 查看 tag

```
查看本地某个 tag 的详细信息：git show <tagName>

查看本地所有 tag：git tag 或者 git tag -l

查看远程所有 tag： git ls-remote --tags origin
```

## 删除 tag

```
本地 tag 的删除： git tag -d <tagName>

远程 tag 的删除：git push origin :refs/tags/<tagName>

```

## 完整流程

```
git add *
git commit -m 'v1.0.0'
git tag v1.0.0
git push
git push origin v1.0.0
```
