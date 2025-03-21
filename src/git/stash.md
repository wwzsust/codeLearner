# git stash 是一个非常有用的 Git 命令，用于临时保存未提交的更改以便后续恢复。以下是一些常用的 git stash 命令及其用法：

1. 保存更改

```bash
git stash
```
这个命令会将当前工作目录和暂存区的更改保存到一个新的 stash 中，并将工作目录恢复到干净的状态。

2. 查看 stash 列表

```bash
git stash list
```
显示所有 stash 条目及其对应的描述信息。

3. 应用最新的 stash

```bash
git stash apply
```
应用最新的 stash 条目到当前工作目录，但不会从 stash 列表中删除它。如果你想应用特定的 stash，可以使用 stash@{n}，例如：

```bash
git stash apply stash@{1}
```
4. 应用并删除最新的 stash

```bash
git stash pop
```
应用最新的 stash 条目到当前工作目录，并从 stash 列表中删除它。如果你想应用并删除特定的 stash，可以使用 stash@{n}，例如：

```bash
git stash pop stash@{1}
```
5. 删除最新的 stash

```bash
git stash drop
```
删除最新的 stash 条目。如果你想删除特定的 stash，可以使用 stash@{n}，例如：

```bash
git stash drop stash@{1}
```
6. 清空所有 stash 条目

```bash
git stash clear
```
删除所有的 stash 条目。

7. 保存带有描述的 stash

```bash
git stash save "description"
```
将当前更改保存到 stash 中，并附加一个描述信息。

8. 保存只包含未暂存更改的 stash

```bash
git stash save --keep-index
```
仅保存工作目录中的未暂存更改，而暂存区的更改不会被保存。

9. 保存只包含暂存更改的 stash

```bash
git stash save --include-untracked
```
保存包括未跟踪的文件在内的所有更改。

这些命令可以帮助你在开发过程中处理临时的、更改状态的切换。