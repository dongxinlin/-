const url=require('url')
const http=require('http').createServer((req,res)=>{
    let path=url.parse(req.url,true);

    let {a,b,callback}=path.query;

    res.end(`${callback}(${a}+${b})`);
})
http.listen(9999,function(){
    console.log('http://127.0.0.1:9999')
})