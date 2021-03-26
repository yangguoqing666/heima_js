const express = require('express');
//实例化express对象
const app = express();
//配置视图引擎
app.set('view engine','ejs')
//让服务器能识别外部样式
app.use('/views',express.static('views'))
//通过对象调用方法
//根据用户的请求地址返回对应的数据
app.get('/',(req,res)=>{
    console.log(__dirname)
    const data = [{
        age:25,
        name:'Summer'
    },{
        age:35,
        name:'Qiutian'
    }
]
    //sendFile  send
    res.render('prof',{websiteName:req.params.id,data:data})
})
app.listen(3333)