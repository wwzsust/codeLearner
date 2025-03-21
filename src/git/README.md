# git命令

### git reset命令,从本地仓库回退

1. git reset --soft 撤销提交到本地仓库的文件，但是保存工作区和暂存区的修改
2. git reset --hard 撤销提交到仓库的文件，删除工作区和暂存区的修改
3. git reset --mixed 撤销提交到仓库的文件，删除暂存区的修改，保存工作区的修改

### git diff命令

git diff命令默认不带参数时表示的是，对比工作区和暂存区的内容

### git branch命令

1. 创建分支`git branch dev`
2. 切换分支`git switch dev/main`
3. 查看分支`git branch -r`
4. 创建并进入分支：`git checkout -b bbs`，这条命令相当于两天命令，git branch bbs, git checout bbs
5. 删除分支： `git branch -d bbs`
6. 合并分支：git switch main -> `git merge bbs`

### alias别名，git命令可以起别名
1. 要编辑git的配置文件.gitconfig，通常位于C:\Users\<你的用户名>\.gitconfig
2. 编辑.gitconfig文件，如下：
```txt
[alias]
	a = add
	c = commit
	l = log
	s = status
```
## git修改最近一次提交
`git commit --amend`这个命令可以修改最近一次提交的注释，也可以将新修改的或者新添加的文件一起在上次commit中提交。

- 如果已经执行git commit -m "xxx"，但是对-m的注释不满意要进行修改可以使用此命令进行修改
- 如果已经执行了git commit -m "xxx"，但是我又添加了一个新的文件打算和上一次提交到一块也可以使用此命名。

## 给指定哈希值的提交打标签(tag)
- git log (查看日志及哈希)
```shell
commit e6773348a5bf5edb8a1a05ed3b
Author: wwz-sust <wwzsust@163.com>
Date:   Thu Jul 25 17:24:43 2024 +0800
```
- git tag -a 版本 哈希 -m "介绍"
- git tag -a v0.1.3 e6773348 -m "Release version 0.1.3"
- git tag（查看当前tag列表）
```shell
v0.1
v0.1.1
v0.1.2
v0.1.3
```
- git push origin v0.1.3（将刚打的tag推送到远程）

