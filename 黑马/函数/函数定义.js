//函数定义方式
function fn(){}   //函数声明

let fun = function(){}  //函数表达式  匿名函数

//利用new Function()

//函数的调用方式ath.max()

/**
 * this 的指向  call bind apply
 * call('你想要指向的对象',a,b)主要用于继承
 * apply也是调用幻术 并且改变this的指向  但是参数必须是数组
 * apply的主要应用
 * apply 的参数是数组  但是在func中参数abc对应数组中的123元素
 * 
 * bind 方法不会执行函数 bind(thisarg,a,b)
 * 如果有的函数我们不需要立即调用 用Bind
 */
let  o ={
    name:'张三'
}
let arr = [12,3,4]
console.log(Math.max.apply(Math,arr)
);
function binds(){
    console.log(this);
}
let f = binds.bind(o,1,2)


//箭头函数中的this指向函数定义位置中的this

let jiantou = {
    age:20,
    say:()=>{
        alert(this.age)   //this指向window   对象没有作用域  无法产生指向作用域
    }
}

//剩余参数

const sumss = (...args) =>{
   let total = 0;
   args.forEach(item=>total+=item)
   return total;
}
sumss(10,20,30);

let [s1,...s2] =  [1,2,3,4];

//扩展运算符  将数组或对象转化为用逗号分隔的参数序列

let ary = [1,2,3];
console.log(...ary);

//扩展运算符 合并数组  合并对象
ary1.push(...ary2)

//includes

