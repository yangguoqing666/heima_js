// 高阶函数是对其他函数进行操作的函数 他接受函数作为参数或将函数作为返回值输出
function fn(cb) {
    cb && cb();
}
fn(function () { })
function fns() {
    return function () {

    }
}


