# windows CMD常用命令
- PowerShell中删除文件夹及其内部所有文件
```shell
rm -r -fo C:\example
# -fo` 是 `-Force` 的简写，表示强制删除，即使是只读或隐藏的文件也会删除
```
- PowerShell中新建一个文件
```powershell
type 1.txt
```
- CMD中删除文件夹及其所有内容文件
```shell
rd /s /q C:\example
# /s 参数表示删除指定文件夹及其所有子文件夹和文件。 
# /q 参数表示静默模式，不提示确认。
```
- 删除单独的文件
```shell
del 1.txt
```
### CMD中新建一个文件
- type只能创建空的文件
```shell
type nul > 1.txt
```
- echo可以创建带内容的文件
```shell
# >  覆盖内容
# >> 追加内容
echo hello > 1.txt
```
- 查看文本内容
1. 在 cmd 中，使用 `type` 和 `more` 命令来查看文本文件内容。 type C:\example.txt
2. 在 PowerShell 中，使用 `Get-Content`、`cat` 和 `more` 命令来查看文本文件内容。
- 重命名命令
`ren`
```shell
ren test test1
```
- copy文件
```shell
copy test1 test2
```
- del删除文件
```shell
md test
echo 111 > 1.txt
echo 222 > 2.txt
# 删除test文件夹下的所有文件
del test\*.txt
```
- move移动文件夹或者文件
```shell
move test d:\code\
```
### 使用scp上传文件
1. 需要输入密码
`scp -r "D:/3d/www" root@xx.xx.xxx.xxx:/root/cmdtest`
2. 不需要输入密码（前提配置好ssh登录）
`scp -r "D:/3d/www" root@aliyun:/root/cmdtest`

### 管道操作运算
> 管道操作就是将上次的命令的执行结果作为下个命令的输入
```shell
dir | find ".txt"
# 查询当前目录下所有文件夹及其文件，并通过find筛选出以.txt结尾的文件

netstat -an | find "TCP"
# 查找网络中是TCP
```
- CMD中`&&`和`||`与程序中的意思一样：
1. `&&`表示前面执行错误则后面不在执行
2. `||`表示前面执行正确后面则不在执行
- CMD中`>`和`>>`分别表示将内容覆盖和追加
### 用户操作
```shell
# 查看当前计算机用户
net user

# 查看用户的向详细信息
net user admin

# 新建
net user admin 123456 /add

# 删除
net user delete admin
```
### 用户组
```shell
# 查看用户组,其中在*Administrators中的是最高权限（系统管理员）
net localgroup
```