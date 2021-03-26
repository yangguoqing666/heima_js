// 展开运算符
//浅拷贝
let a = [1, 2];
let b = [...a];
//合并
let c = [...a, 3, 4];
//剩余参数
function test(a, ...rest) {
    // console.log(rest)
}
test(1, 2, 3, 4)
let obj = { a: 1, b: 2 };
let objcopy = {
    c: 3,
    ...obj
}
// 数组 
// 1.forEach()  对象数组可以被改变[{},{}]
// 2.map()
// 3.filter()
// 4.reduce()
// 5.some()
// 6.every()
// 7.all()方法

let arr = [1, 'a', 'bb'];
arr.forEach((item, index) => {
    index = 'cc'

})
arr.filter((item) => {
    // console.log(item, 'item')
    // console.log(index,'index')
})
//解构实现两个值之间的互换
let a_ = ['a', 'aa'];
let b_ = ['b', 'bbbb', 'bb'];
[a_, b_] = [b_, a_];
// console.log(a_)
//数组去重
function unquine(arr) {
    //当前元素在原始数组的第一个索引==当前索引
    return arr.filter((item, index, arr) => {
        return arr.indexOf(item, 0) === index;
    })
}
//返回闭包的函数
function bibao(x) {
    // return function(y){
    //    return x+y; 
    // }
    function bibao2(y) {
        return x + y;
    }
    return bibao2
}
let arrs = [1, 2, 3];
let y_arr = [1, 1, 1, 1, 2, 3, 3, 4, 4]
let intersection = y_arr.filter(v => b.includes(v))
let difference = y_arr.concat(arrs).filter(v => !y_arr.includes(v) || !arrs.includes(v))

//球队问题

// 有三只球队，每只球队编号分别为球队 1，球队 2，球队 3，这三只球队一共需要进行 n 场比赛。现在已经踢完了 k 场比赛，每场比赛不能打平，踢赢一场比赛得一分，输了不得分不减分。
// 已知球队 1 和球队 2 的比分相差 d1 分，球队 2 和球队 3 的比分相差 d2 分，每场比赛可以任意选择两只队伍进行。求如果打完最后的 (n-k) 场比赛，有没有可能三只球队的分数打平

function getResult() {

}


//洗牌的随机算法
function shuffler(arr) {
    var result = [],
        random;
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result;
}
// console.log(shuffler([1, 2, 3]))
//随机数范围
function ranrange(min, max) {
    if (arguments.length === 2) {
        return Math.floor(min + Math.random() * (max + 1 - min))
    } else {
        return null;
    }
}
console.log(ranrange(1, 100))
//判断元素是否在数组中
function isInArray(arr, val) {
    //  return arr.indexOf(val) == -1?false:true;
    return arr.includes(val)
}
console.log(isInArray([1, 2, 3], 2)
)
//if-else的优化手段 
//includes处理多条件
let code = 200;
if (code === '202' || code === '203') {
    // 
}
//写成
if ([202, 203].includes(code)) {
    // 
}
for (var i = 1; i <= 10; i++) {
    var sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
  
    console.log(i)
  }

for(let i=0;i<10;i++){
    if(i==6){
        break;
    }
    // console.log(i)
}
//while
/*
 在js中 万物皆对象，方法(Function)是对象
 方法的原型(Function.prototype)也是对象
 因此,她们都具有对象的共同特点
 即：对象具有属性_proto_,可称为隐式原型，
 一个对象的隐式原型指向构造该对象的构造函数的原型
 这也保证了实例能够访问在构造函数原型中定义的属性和方法

 2方法(Function)
方法这个特殊的对象,除了和其他对象一样有上述_proto_属性之外，
还有自己特有的属性----原型属性（prototype）,z这个
属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例
共享的属性和方法（我们把这个对象叫做原型对象）。原型对象也有一个属性
，叫做constructor这个属性包含了一个指针，指向原构造函数.

*/

//通过构造函数实现继承
//原理就是通过call,apply改变this的指向
//不能实现父类的原型上面的继承
function Fruit(apple){
    this.apple = apple;
}
Fruit.prototype.weidao = function(){
    alert('水果是甜味的')
}
function Hamigua(apple,y){
   Fruit.call(this,apple);
   this.y = y;
}

let smallhamigua = new Hamigua('pear');
console.log(smallhamigua.apple)
console.log(smallhamigua.weidao())

//通过原型链继承  解决构造函数不能继承原型的问题
//缺点 子类的修改之间会互相影响
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.say = function(){
    console.log(this.name+this.age)
}

function Obj(type){
    this.type = type;
}

Obj.prototype = new Person();

let o1 = new Obj();
let o2 = new Obj();

o1.name = '111';




