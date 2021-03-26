//js没有操作文件的能力  
//但是Node有
//fs是file-systen的简写
let fs = require('fs');
//读取文件
//第一个参数 是文件的路径 
// 第二个参数是回调函数
//error 读取失败  error就是错误对象 undefined
//data 读取成功 data就是数据
fs.readFile('./hello.txt', function (error, data) {
    if (error) {
        console.log('出错了');
        return;
    } else {
        console.log(data.toString())

    }
})
//接受的参数就是第一个是路径  第二个是内容 第三个是回调函数
//这里的回调函数只接受一个参数error
fs.writeFile('./你好.md', '哈哈哈', function (error) {
    if (error) {
        console.log('该文件出错了')
    }
})