redux的设计思想  

1 视图与状态一一对应 
2所有的状态 都保存在一个对象里面

redux提供 createStore这个函数 来生成store
const store = createStore(fn)
const state = store.getState()


生成action的函数就叫做 acionCreator()

store.dispatch()  就是来发送action的

store.dispatch(addToDo('actiontype'))

store收到action后要给i出一个性的state 这样view才会变化

改变state的计算过程就叫做  reducer

const reducer = function(state={},action){
    return state;
}

在创建stroe的时候我们需要将reducer传递给createStoe(reducer)中

const store = createStore(reducer)

reducer是纯函数  我们不能改变state因此 我们需要返回一个全新的对象

function reducer(state,action){
   return Object.assign({},state,todo)

   //或者

   return {...state,...newState}
}
store.subscribe(listener);

combineReducers 

createStore可以接受三个参数

const store = createStore(
    reducers,
    initstate,
    applyMiddleware(thunk,promise,logger)
)

//中间借的内部可以拿到
getState()和dispatch两个方法

store.dispatch接受一个 Action 对象作为参数，将它发送出去。
action在操作的时候我们要执行操作开始 和结束  
如果一个action返回的是一个函数 这是不允许的 
这时 我们要使用redux-thunk 来改造 store.dispatch()
使其能执行异步操作  
(因为返回的是函数要触发接口请求 返回promise触发异步操作
 所以我们要用redux-thunk
)


redux-promise 返回的是一个promise

redux-thunk可以让store.dispatch()接受函数作为参数
那么promise可以让store.dispatch接受promise作为参数


react-redux这个库



redux中间件  用过thunk promise  saga

主要是中间件的原理是什么?




react-redux提供了一个connect方法 用于从ui组件生成容器组件

const visibletodulist = connect(
    mapStateToprops,   负责输入逻辑 将state映射到ui组件的参数(props)
    mapDispatchTOprops 负责输出逻辑 将操作映射为action
)()

mapStateToProps 和mapDispatchToProps都返回一个对象

Provider的原理是connect属性 让App所有的子组件都可以拿到state

function mapStateToProps(state){
    return{
        value:state.value
    }
}

function mapDispatchToProps(dispatch){
    return{
        onClick:()=>dispatch(myaction)
    }
}

const myaction = {type:'myaction',payload:'1111'}


redux-thunk源码


在redux中 所有的数据都要放在redux中管理



react性能优化
class Test extends React.pureComponent{
    constructor(props){
        super(props)
    }
    render(){

    }
}
pureComponent()传入的新的props和旧的props没区别的话就不更新不使用shouldComponentUpdate


虚拟dom  就是一个js对象   虚拟dom比对的是js对象而 真实的dom比对上面又各种属性方法很好性能  里面有属性 标签名  事件 以及子元素 和其他属性

diff算法
当状态变更的时候  会重新构造一个新的对象树  新书和旧书相互比较  记录差异  然后将差异应用到构建的真正的DOM树上 视图更新

react的diff算法  是通过三种diff
tree diff react会通过updatedepth对虚拟dom进行层级控制  对象相同层级的节点比较
 只需要便利一次就行
component diff  分为同类型 通过shoudcomponent 来判断
不同类型的组件  之间删除

element tree  通过设置key 不需要无谓的删除创建

 不存在就删除

同层有差异  那么下面的就不去比较了


webpack  是借助loader完成的jsx代码转化  还是bable

bable-preset-react

bable是什么
bable是一个javascript的编译器

setState
setState  只在合成事件和钩子函数中是“异步”的，在原生事件和setTimeout 中都是同步的。setState 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。
setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次setState，setState的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时setState多个不同的值，在更新时会对其进行合并批量更新。



this.setState((preState)=>){
    name:preState.age++ 
}))

遇到的坑状态不会马上更新


refs的作用是什么  ???


什么场景下使用refs
获取图片的宽高等等 上传文件
ref
ref是一个函数 好处就是在重新须软或卸载的时候清空 防止内存泄漏


受控组件和非受控组件
受 input value=this.state.value
非受 通过refs来获取数据
受控: the value of the input 被 React.Component 通过 setState 的形式进行赋值, 即这个value全程是被React组件所控制, 那就符合受控组件的定义.非受控: the value of the input 只通过DOM节点操作进行赋值和获取. 这种形式表现为React组件没有与之相关联的 state 或数据.




this指向的问题一般怎么解决
箭头函数this指向组件本身
箭头函数 bind  that = this;

dva  redux-saga   sideEffects

dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch

组件指的是页面的一部分

如何避免ajax数据的重新获取??/???
react-redux   例如咱们的课程列表  进入课程的时候获取一次数据

在切换列表的时候 我们就不需要再次重新获取数据了


react-router4的核心思想  组件化的路由   react-router3 区别是什么

react-router的基本原理  hashhistory  browerhistory(需要后端在服务器配置)

异步组件

reloadable库  路由懒加载  按需加载 

import('home/header').then

在精华的项目中是通过require.ensure实现的

xss攻击?

新的生命周期 

getDervedStateFromProps 和componentWillReviceProps()

immutable

shouldComponentUpdate(nextprops,nextstate){
    if(nenxtprops.name===this.props.name){
        return false;
    }
    return true;
}

componentWillReciveProps(){}调用时机

调用时机是在props改变的时候才会执行
不想写should的话  我们可以使用PureComponent来代替

函数组件的memo

高阶组件 你是怎么理解的   本质是一个什么东西



函数组件与hooks

HMR 看webpack视频
什么是jsx

react hooks原理

context优点和缺点

mvc  mvvm
React Fiber 的目标是提高其在动画、布局、手势、暂停、中止或重用等方面的适用性，并为不同类型的更新分配优先级，以及新的并发原语

React.memo():这可以防止不必要地重新渲染函数组件
PureComponent:这可以防止不必要地重新渲染类组件

什么是纯函数？

防抖和节流

react youhua







antd bable