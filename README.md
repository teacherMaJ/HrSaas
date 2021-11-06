## el-tree的使用
    1. 如何确定这个树形结构是否有子节点
       1. 看是否有children属性

    2. label的属性值控制着el-tree节点的名字，children的有无控制着是否有子节点
       如果后台传递过来的数据中，没有label，也没有children属性，但是我们还是要树形结构显示怎么办
       1. 此时可以通过props来进行设置，props是一个对象，对象内有两个属性值 label，children
       2. 其中label可以指定你要用什么属性作标题；children可以让你设置用什么属性值作子节点
    3. props的作用就是告诉el-tree去哪里找label内容，去哪里找子节点
## el-row
   1. 在el-row布局中,如果用align来设置元素的位置，那么需要给el-row一个定高