const fs = require('fs')
const path = require('path')

// 读取文件成功之后 帮我调用success函数  如果读取失败帮我调用fail函数
/*function success () {
    console.log(`成功了`)
}
function fail () {
    console.log(`失败`)
}
 fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', (err, data) => {
    if (err) return fail()
    success()
}) */

// 用promise写
function ReadFilePromise () {
    return new Promise(function(resolve, reject) {
        fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', (err, data) => {
            if (err) return reject()
            resolve()
        })
    })
}

ReadFilePromise().then((res) => {
    console.log('成功了')
}, (err) => {
    console.log('失败了')
})
