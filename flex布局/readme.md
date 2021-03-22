flex布局 以及原理 父属性  子属性

父元素设置flex后  子元素的float clear vertical-align都将会失效

flex布局说白了就是给父盒子添加flex属性 来控制滋贺子的位置和排列方式

父属性

{
    设置主轴和侧轴的方向 行和列 默认为row行
    flex-dicection  row  column
    设置主轴上子元素的排列方式  靠左 靠右  居中  平分剩余空间  先两边贴边 再平分剩余空间
    justify-content    flex-start
    设置子元素是否换行  默认不换行 如果装不开会缩小子元素的宽度 放到父元素里面
    flex-wrap  nowrap不换行  wrap换行
    设置侧轴上的子元素陪练方式  在子项为单行的时候使用
    align-items flex-start flex-end center strench拉伸(但是子元素不要给高度)
    设置侧轴上的子元素的排列方式（多行）
    align-content  适用于换行的情况
    flex-direction和flex-wrap属性的复合属性

}

子属性
{
    flex子项目占的份数  分配的是剩余空间  也可以写包百分比相对于父级来说 20%
    align-self控制子项自己在侧轴的排练方式
    align-self 允许单个项目
    order定义子项的排练顺序  数值越小越靠前
} 