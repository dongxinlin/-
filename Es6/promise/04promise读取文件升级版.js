const fs = require('fs')
const path = require('path')

// 读取文件成功之后 帮我调用success函数  如果读取失败帮我调用fail函数
/* function success () {
    console.log(`成功了`)
}
function fail () {
    console.log(`失败`)
}
 fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', (err, data) => {
    if (err) return fail()
    fs.readFile(path.join(__dirname, './files/2.txt'), 'utf8', (err, data) => {
        fs.readFile(path.join(__dirname, './files/3.txt'), 'utf8', (err, data) => {

        })
    })
}) */

// 用promise写
function ReadFilePromise (name) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path.join(__dirname, `./files/${name}`), 'utf8', (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

ReadFilePromise('1.txt')
.then((res) => {
    console.log(res)
    return ReadFilePromise('2.txt')
})
.then((res) => {
    console.log(res)
    return ReadFilePromise('3.txt')
})
.then((res) => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})

// 
// fetch(URL).then(res => return res.json()).then(res => {console.log(res)})

/* $.ajax({
    url:''
})
.then(res => {

}) */
