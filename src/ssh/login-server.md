# 使用密钥的形式登录到服务器
1. 首先要生成密钥文件（生成的细节可以看keygen.md）
```shell
ssh-keygen -t rsa -b 4096
```
- id_rsa 私钥
- id_rsa.pub 公钥
2. 将生成的公钥添加到服务器
- 登录到服务器`ssh user@server_ip`
- 创建 `.ssh` 目录（如果不存在）并设置权限
```shell
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```
3. 将公钥内容添加到 `authorized_keys` 文件
```shell
# 如果没有需要创建
~/.ssh/authorized_keys
```
4. 设置 authorized_keys 文件的权限：
```shell
chmod 600 ~/.ssh/authorized_keys
```
5. 在config中配置登录信息（没有的需要新建）
```shell
Host aliyun
  HostName 32.54.162.164
  User root
  IdentityFile C:\Users\su\.ssh\aliyun
```