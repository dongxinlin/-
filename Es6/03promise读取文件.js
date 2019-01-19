const fs=require('fs');
const path=require('path');

function ReadFile(){
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,'./data/1.txt'),'utf8',(err,data)=>{
            if(err) return reject();
            resolve(data);
        })
    })
}

ReadFile()
.then(res=>{
    console.log('成功了');
    console.log(res)
})
.catch(err=>{console.log('失败了') ,console.log(err)}) ;