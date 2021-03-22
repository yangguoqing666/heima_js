let heroName:string = '安吉拉';
alert(heroName);
let dName:string = 'lucky';

// 字符串类型  数值  布尔值

let names:string = 'jajha';
let age:number = 11;

let isAuth:boolean = true;

let undef:undefined = undefined;
let nul:null = null;

// 数组

let arrJs = [1,'a',true];

let arrTs:string[] = ['diaochan','daqiao','anqila'];
let arrNum:number[] = [12,12,123];
let arrHero:Array<number> = [2,1,3]   //泛型语法

//元组   规定元素数量和每个元素类型的数组  每个元素的类型 可以不相同

let tup1:[string,number,boolean] = ['1',1,true];

//访问元组中元素和长度

console.log(tup1[0],tup1.length);

//为什么要有元组   如需不同的元素可以用元组  

//枚举

enum UserSex {
    Boy = 1,
    Girl = 2,
    Unkonw = 3
}

console.log(UserSex.Boy);


