

const ccasd = "aaa|";
ccasd.split(',')
console.log(ccasd)
let obj1 = { 'aa': 'aa' }
let obj2 = { 'bb': 'bb' }
Object.assign(obj1, obj2)
// console.log(obj1)
let datas = [{ "id": 531, "title": "测试考试", "studentNum": 5, "lessonNum": 0, "price": 0, "fenleiming": "子分类,测试1022,职位攻略,好的,职能分类", "nicheng": "admin|admin" }, { "id": 533, "title": "1023", "studentNum": 4, "lessonNum": 0, "price": 0, "fenleiming": "职能分类,子分类,测试1022", "nicheng": "admin|admin,aa|bb" }];
let datasArr = datas.map(item => {
    return item['nicheng'].split(',').length
})
dataLength = Math.max(...datasArr)
let yhshuju = { 'id': 'id', 'title': '课程名', 'studentNum': '学员数', 'price': '价格', 'lessonNum': '课时数', 'fenleiming': '分类名' };
for (let i = 0; i < dataLength; i++) {
    let obj = {};
    obj[`teacher${i}`] = '教师名称';
    obj[`name${i}`] = '用户名';
    Object.assign(yhshuju, obj)
}
console.log(yhshuju)
let oo = {'aa':[]}