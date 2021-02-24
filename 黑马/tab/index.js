// let that = this;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.firstnav ul:first-child');
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    // 初始化操作  让相关的元素绑定事件 可以理解为compoentDidMOUT
    init() {
        this.updateNode();
        this.add.onclick = this.addTab;
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            //注意点一  切换功能我们已经使用toggle表示了 所以不用function来表示了
            //注意点 二 this.toggle里面的this指向的是每一个小li  谁调用就指向谁
            //
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i],this)    //function () {console.log(this.index)}
        }
    }
    //
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
    }
    // 1切换
    toggleTab(that) {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 2添加
    addTab() {
        that.clearClass();
        let random = Math.random();
        let li = '<li class="liactive"><span>测试2</span><span class="iconfont icon-guanbi"></span></li>';
        let section = '<section class="conactive">测试2' + random + '</section>';
        that.ul.insertAdjacentHTML('beforeend', li)
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    // 3删除
    removeTab() {

    }
    // 4修改
    editTab() {

    }
}
new Tab('#tab');


