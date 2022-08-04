# git merge

## 分支合并

分支合并，将 A 分支合并到 B 分支。

```
// 切换到A分支
git checkout A

// 获取A分支最新代码
git pull

// 切换到B分支
git checkout B

// 获取B分支最新代码
git pull

// 合并分支
git merge A
```

## 合并指定文件

有时候想要合并 A 分支指定的文件或者文件夹到 B 分支上去，例如合并 A 分支的 README.md 文件到 B 分支上面

```
// 切换到A分支
git checkout A

// 获取A分支最新代码
git pull

// 切换到B分支
git checkout B

// 获取B分支最新代码
git pull

// 合并指定文件或者文件夹到分支
git checkout A README.md

```

如果这里想要合并文件夹的话，比如 src/views 文件夹，可以将 READMD.md 换成文件夹 src/views/\*\*

## 合并分支时禁止合并特定文件

> [参考链接](https://blog.csdn.net/weixin_45318534/article/details/113955677)

实现 dev 分支根目录下的分支文件 readme.txt，不合并到 master 分支上

实现 dev 的分支文件/common/src/main/resources/application.yml，不合并到 master 分支上

1. 根目录运行命令：

```
git config merge.ours.driver true  // 开启忽略文件配置
```

2. 在 dev 分支上建立`.gitattributes`文件并提交 内容如下：

```
readme.txt merge=ours
/common/src/main/resources/application.yml merge=ours
```

3. 切换到 master 分支上 merge

```
git checkout master
git merge dev
```
