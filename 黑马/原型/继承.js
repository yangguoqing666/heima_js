/**
 * call()
 * 调用这个函数 并且修改函数运行时候的this指向
 * fun.call(thisArg,arg1,arg2,...)
 * thisarg:当前动用函数this的指向 arg1其他的参数
 */

 function fn(x,y){
     console.log(this.name);
     console.log(x+y);
 }
//  fn()
// (1)   call(可以调用函数)  fn.call()

let o = {
    name:'andy'
}
//(2)  call()可以改变这个函数this的指向   此时this就指向了o这个对象

fn.call(o,1,2)

//组合继承   构造函数加原型

//借用父构造函数继承属性

//父构造函数
function Father(name,age){
    //this指向夫构造函数的对象实例
    this.name = name;
    this.age = age;
}
Father.prototype.money = function(){
    console.log(100000);
}
//子构造函数
function Son(name,age){
   //this指向子构造函数实例
   Father.call(this,name,age)  //继承了父构造函数的属性
}
let son = new Son('ldh',18)
console.log(son);

//借用对象原型继承方法
//如果利用对象的形式修改了原型对象，别忘记用constructor指回原来的构造函数
Son.prototype =new Father();
Son.prototype.constructor = Son;
 
