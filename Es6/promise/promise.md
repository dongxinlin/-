## Promise进阶
1. Promise是一个构造函数
   + 需要new Promise去创建一个Promise对象
   + 在new Promise(函数) 这个函数有2个参数一个是resolve(成功的回调) 一个是reject(失败的回调)
2. promise对象上有then()同时还有一个叫catch方法
   + then接受2个参数一个是成功的回调一个是失败的回调
   + 在then中分别传递成功和失败回调函数给resolve和reject
3. 为什么要使用promise?
   + 解决嵌套地狱问题
4. promise会立即执行
   