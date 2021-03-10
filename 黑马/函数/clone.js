let obj = {
    name: '11',
    age: 2,
    msg: {
        message: 'msage'
    }
}

let newobj = {};
for (let k in obj) {
    newobj[k] = obj[k]
}
console.log(newobj);
newobj.msg.message = 'newmessage';
console.log(obj);

/**
 * 浅拷贝只是拷贝一层 更深层次对象级别的只拷贝引用(相当于拷贝地址)
 * 深拷贝拷贝多层 每一级别都会拷贝
 */
//Object.assign(o,obj)  浅拷贝

//封装函数,深度拷贝

function deepColne(newobj, oldobj) {

    for (let k in oldobj) {
        //判断属性值是属于哪种数据类型
        //1获取属性值
        let item = oldobj[k];
        //判断这个值是不是数组
        if (item instanceof Array) {
            newobj[k] = [];
            deepColne(newobj[k], item)
        } else if (item instanceof Object) {
            //判断这个值是不是对象
            newobj[k] = {};
            deepColne(newobj[k], item)
        } else {
            //属于简单数据类型
            newobj[k] = item;
        }

    }
}

deepColne(newobj, obj)