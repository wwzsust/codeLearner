# Ts学习记录

全局安装ts
> npm i typescript -g

手动编译
> tsc index.ts

自动编译
> tsc init  生成tsconfig.json

监控所有文件
> tsc --watch

监控单独一个文件
> tsc --watch index.ts

生成唯一id
```js
const uniqueId = crypto.randomUUID();
console.log(uniqueId); // 例如: 'e6b2fc64-275b-4c38-8d4a-bbb1b16aaf54'
```