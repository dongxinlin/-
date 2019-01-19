// new 做了什么
// 1. 创建一个新的空对象
// 2. 将构造函数中的this指向这个新空对象
// 3. 执行构造函数中的代码
// 4. 返回这个对象
// 5. 这个对象上有一个__proto__指向构造函数的原型

var promise = new Promise((resolve, reject) => {
    var flag = false
    if (flag) return resolve()
    reject()
})
promise.then((res) => {
    var a = '成功回调'
    console.log(a, 11111)
}, (err) => {
    var b = '失败回调'
    console.log(b, 22222)
})