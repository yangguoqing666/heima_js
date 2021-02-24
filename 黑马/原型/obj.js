let obj = {
    name:'1'
};
//Object.defineProperty()定义对象中新属性或修改原来的属性

//Object.defineProperty(obj,prop,descriptor);
//writable设置属性是否可以重写
Object.defineProperty(obj,'id',{
    // writable:false  //默认false不预序
    //value:1
    enumerable:false   //默认不允许遍历
})
console.log(obj);
