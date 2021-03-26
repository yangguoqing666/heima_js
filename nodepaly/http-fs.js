let http = require('http');
let fs = require('fs');
const server = http.createServer();
server.on('request', function (req, res) {
    let url = req.url;
    if (url === '/') {
        fs.readFile('./views/index.html', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('文件读取失败')
            } else {
                res.setHeader('Content-Type', 'text/html; charset=utf-8');

                //data默认是二进制数据
                res.end(data)
            }
        })
    }else{
        //图片不需要发送编码格式
        res.setHeader('Content-Type','image/jpeg')
        res.end()
    }
})

server.listen('3000', function () {
    console.log('启动成功,可以访问了')
})