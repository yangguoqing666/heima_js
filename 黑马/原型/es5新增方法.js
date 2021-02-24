/**
 * 数组方法
 * 字符串方法
 * 对象方法
 */


 //迭代方法  forEach()  map() filter() some() every()
 //array.forEach(function(currentValue,index,arr))
//forEach不返回新数组  而map是要返回数组的
 let arr = [1,2,3];
 let sum=0;

 arr.forEach((value,index,array)=>{
     sum+=value;
     console.log(`每一个数组元素${value}`);
     console.log(`每一个数组元素的索引号${index}`);
     console.log(`数组本身${array}`);
 })
 console.log(sum);
 //filter((value,index,arr))
 //filter 返回新数组  来筛选数组

 let arrfilter = [12,66,4,88,3];
 let newarr = arrfilter.filter((value,index)=>{
    //  return value>=20;
    return value%2 === 0;
 })
 console.log(newarr);

 //array.some((value,index,arr)) 用于检测数组中的元素是否满足指定条件
 //说白了就是查找数组中是否有满足条件的元素 找到第一个就直接返回
 //返回的是布尔值
  //如果找到i一个满足条件的元素则终止循环 否则继续查找
  

  //some  查询唯一的元素  用some效率更高

   arrfilter.some((value)=>{
      return value>=1000;
  })
  console.log('hahahaha');
  //every





//trim去除字符串两侧的空格  let str1 = str.trim();

//可以用在input搜索中






 