const express=require('express');
const app=express();
const axios=require('axios');

const jwt=require('jsonwebtoken');

app.use(express.static('./pulick'));

app.get('/',(req,res)=>{
    res.send('创建成功');
})
app.get('/text',(req,res)=>{
    res.send({err:0,msg:'请求成功'})
})

app.get('/api/v1/axio',(req,res)=>{
    axios.get(`http://zuowen.api.juhe.cn/zuowen/typeList?key=d192df5a3575cb1cd9467798c7b5161d&id=1`)
    .then(result=>{
        res.send({msg:result.data})
    })
})

app.get('/api/v1/token',(req,res)=>{
    jwt.sign({ user: '张三' ,psd:'12345'}, 'sjiajijaklja', function(err, token) {
        res.send({erro:0,token:token});
    });
})

app.get('/api/v1/getuse',(req,res)=>{
    let token=req.query.token
    jwt.verify(token, 'sjiajijaklja', function(err, decoded) {
        res.send({err:0,msg:decoded})
      });
})

app.listen(3000,()=>{
    console.log(`http://127.0.0.1:3000`)
})