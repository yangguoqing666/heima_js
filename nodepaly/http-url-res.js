let http = require('http');
const { request } = require('https');
const server  = http.createServer();
server.on('request',function(req,res){
    console.log('收到请求',`请求路径是${req.url}`)
    //write的方式太麻烦啰嗦了
    //直接end的同事 发送响应数据
    let data = {
       ms:'qqqqq'
    }
    //根据不同的请求路径来处理响应
    //request.url获取到的是端口号后面的路径
    let url = req.url;
    // res.write('qqqqqqqqqq');
    // / 一般是首页、登录页
    if(url==='/'){
        res.end('index page');
    }else if(url==='/login'){
        res.end('login page');
    }else if(url==='/products'){
        const pro = [
            {
                name:'苹果',
            }
        ]
        
        console.log('请求的客户端的端口号是',req.socket.remoteAddress,req.socket.remotePort)
        //在http协议中 Content-Type 告诉用来告知对方发送的内容是什么数据类型
        //text/plain是普通文本的意思   文本类型      编码格式
        res.setHeader('Content-Type','text/plain; charset=utf-8')
        //响应内容只能是二进制数据或者是字符串 
        //数组转字符串
        res.end(JSON.stringify(pro))
    }
    else{
        res.end('404 Not Found')
    }
})

server.listen('3000',function(){
    console.log('启动成功,可以访问了')
})