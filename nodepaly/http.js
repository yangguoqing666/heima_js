//随时用node构建一个web服务器
// 1 加载http模块

let http = require('http');
// 2第二步使用http.createServer()创建一个web服务器
//返回一个Server实例

let server = http.createServer();

// 3 服务器要干嘛？
// 提供服务:对数据的服务

// 发请求 接受请求 处理请求 发送响应
//注册request请求事件 当客户端请求过来 就会自动触发request请求执行回调函数

server.on('request',function(){
    //接受请求也就是访问接口的时候
   console.log('收到客户端的请求了')
})
//启动服务器  ////绑定端口号

//为什么要有端口号

server.listen(3000,function(){
    console.log('服务器启动成功  可以通过http://127.0.0.1:3000进行访问')
})



