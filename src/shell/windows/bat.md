- @echo off命令关闭原始盘符和文件夹
- pause 出现cmd命令窗口等待， 否则在运行完成就会瞬间推出cmd窗口。

- bat中的参数%1，%2表示第一个参数和第二个参数
调用.bat是在命令行传入，例如：
```shell
$ 1.bat username password
```
.bat文件
```shell
@echo off
echo %1
echo %2
# 给计算机添加用户
net user %1 %2 /add
```