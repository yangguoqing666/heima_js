//防抖
// 持续触发不执行
// 不触发的一段时间之后再执行
var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    console.log(this)
    container.innerHTML = count++;
};
function debounce(func, wait) {
    var timeout;
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func()
        }, wait)

    }
}
container.onmousemove = debounce(getUserAction, 1000);
//节流 在持续的时间内只执行一次
function throttle(fn) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
        if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
        console.log(canRun,'canRuncanRuncanRun')
        canRun = false; // 立即设置为false
        setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
            fn.apply(this, arguments);
            // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
            canRun = true;
        }, 1500);
    };
}
function sayHi(e) {
    console.log(2222222);
}
window.addEventListener('resize', throttle(sayHi));

function deeee(fnc, wait) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fnc.apply(this, arguments)
        }, wait)
    }
}
function jieliu(fnc, wait) {
    let run = true;
    return function () {
        if (!run) return;
        run = false;
        setTimeout(() => {
            fnc.apply(this, arguments);
            ru = true;
        }, wait);
    }

}

//检测数组

console.log(Object.prototype.toString.call([1,2,3]))

//instance of用来检测一个对象的原型链上是否存在构造函数的prototype属性   instanceof 用于判断一个变量是否某个对象的实例， 但 instanceof 只能用来判断对象类型，原始类型不可以
//typeof不能校验object的其他类型，引用类型除了function都不能区分

//instanceof不能校验原始值类型
//箭头函数  没有自己的this  没有arguments  无法使用apply call bind不可以使用 new 命令，因为：

// 没有自己的 this，无法调用 call，apply。
// 没有 prototype 属性 ，而 new 命令在执行时需要将构造函数的 prototype 赋值给新的对象的 __proto_