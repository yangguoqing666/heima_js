

function getIndex(arr) {
    let index = -1;
    const minVal = arr.reduce((cur, pre) => {
        return (cur <= 0 || pre <= 0) ? Math.max(cur, pre) : cur > pre ? pre : cur;
    }, -1);
    index = arr.findIndex(item => item == minVal && minVal > 0)
    return index;
};
let arr = [1, 2, 2, 5, 8, 1, -1, -50, 0, 3, 2];
// console.log(getIndex(arr))

const list = [1, 2, 3];
const sauqre = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
};
// function test() {
//     list.forEach(async x => {
//         const res = await sauqre(x)
//         console.log(res)
//     })
// }
async function test() {
    for (let x of list) {
        const res = await sauqre(x)
        console.log(res)
    }
};
// test();
let arrs = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
let newarr = arrs.toString().split(",").sort((a, b) => { return a - b }).map((item) => Number(item));

let arrfilter = newarr.filter((item, index) => {
    return newarr.indexOf(item) === index;
});
console.log(arrfilter)
function Person(name, age) {
    this.name = name;
    this.age = age;
};
/*定义一个学生类*/
function Student(name, age, grade) {
    const haha = Person.apply(this, arguments);
    console.log(haha, 'hahah')
    this.grade = grade;
};
//创建一个学生类  
var student = new Student("zhangsan", 21, "一年级");

function Parent(name, age) {
    this.name = name
    this.age = age
    console.log(this, 'Parent')
    console.log(this.name, this.age, 'parentname age')
};
function Children(name, age, height) {
    console.log(this, arguments, 'Children')
    // Parent.apply(this,[name,age,height])
    Parent(name, age)
    this.height = height
};
let lisi = new Children("李四", 12, 170);
// console.log(lisi.name,lisi.age,lisi.height,'newobject')


//45道题之come on 
//查找数组元素的位置

//example [1,2,3].3==>2


