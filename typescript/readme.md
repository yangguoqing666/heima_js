ts一个js的超集 添加了类型
ts不能被js解析器直接执行，需要将ts编译为js
让vscode自动将ts文件编译为js文件
1运行 tsc --init 创建tsconfig.json文件
修改tsconfig.json文件   设置js文件夹 ''outDir "./js/"
设置vscode监视任务 之后修改项目中的ts自动生成js

