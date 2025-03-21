# 生成带签名密钥

使用 ssh-keygen 生成带有注释的密钥
打开 PowerShell 或命令提示符。

> 运行 ssh-keygen 命令，并使用 -C 选项添加注释：

```shell
ssh-keygen -t rsa -b 4096 -C "your_comment_here"
```
- -t rsa 指定生成 RSA 类型的密钥。
- -b 4096 指定密钥长度为 4096 位（可以根据需要选择不同的长度，例如 2048 位）。
- -C "your_comment_here" 添加注释。这里的 your_comment_here 可以替换为任何你希望的标记或描述，例如邮箱地址、用户名或用途描述。

# 生成指定名称的密钥文件
```shell
ssh-keygen -t rsa -b 4096 -C "your_comment_here" -f /path/to/your_key_name
```
- -t rsa` 指定密钥类型为 RSA。 
- `-b 4096` 指定密钥长度为 4096 位（可以根据需要调整）。 
- `-C "your_comment_here"` 为密钥添加注释（可选）。 
- `-f /path/to/your_key_name` 指定密钥文件的名称和路径。

### 示例
```shell
ssh-keygen -t rsa -b 4096 -C "wwzsust@163.com" -f C:\Users\wwzsu\.ssh\aliyun
```
这将在C:\Users\wwzsu\.ssh\下生成两个文件：
- `aliyun` 私钥文件
- `aliyun.pub`  公钥文件