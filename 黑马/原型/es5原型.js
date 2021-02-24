/*
创建对象对象字面量  new Object
*/

let obj1 = new Object();
let obj2 = {};
//构造函数

function Star(name){
    this.name = name;
    this.age = age;
    // this.sing  = function(){
    // }
}
// Star.prototype.sing = function(){
//     console.log('sing');
// }
// Star.prototype.movie = function(){
//     console.log('movie');
// }
Star.prototype = {
    constructor:Star,
    sing:function(){
        console.log('sing');
    },
    movie:function(){
        console.log('movie');
    }
}
//用对象的方式写的话就会把prototype之前的属性主要是constructor都覆盖掉
//所以我们要手动指定consctor
let ff = new Star('ldh');

/**
 * 先创建一个空对象
 * this指向空对象
 * 执行构造函数 给新对象添加属性方法
 * 返回新对象
 * 
 * 什么是原型
 * 一个对象  称为prototype为原型对象
 * 作用就是共享方法
 * 
 * 对象身上有一个__proto__指向构造函数的prototype
 * 
 * ff.__proto===Star.prototype  true
 * 查找规则
 * 先在对象本身查找 对象本身没有的话  就通过__ptoto__去构造函数的prorype去查找
 * 
 * Star.prototype.constructor===Star  true
 * ff.__proto__.constructor ==Star true
 * 
 */
//给对象添加内置对象

Array.prototype.sum = function(){
    let sum = 0;
    //在构造函数中this就是指向实例对象  
    //所以这个this也就是创建的数组实例
    for(leti=0;i<this.length;i++){
        sum+=this[i];
    }
    return sum;
}

let arr = [1,2,3]; arr.sum()
