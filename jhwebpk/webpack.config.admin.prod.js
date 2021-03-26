/**
 * Created by zhaobin on 2016/11/12.
 */
var path = require('path');
var os = require('os');
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

var config = {

    resolve: {
        alias: {
            '~': path.join(__dirname, '../src')
        },
        extensions: ['.tsx','.ts','.js', '.jsx']
    },
    mode: 'production',
    devtool: false,
    entry: {
        admin: ['@babel/polyfill', './src/admin/app.jsx'],
    },
    output: {
        filename: './[name].bundle.js',
        path: path.join(__dirname, '../build'),
        publicPath: '/',
        chunkFilename: '[name].admin.chunk.js'
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                loader: 'happypack/loader?id=js',
                include: path.join(__dirname, '..', 'src'),
                exclude: path.join(__dirname, '..', 'node_modules'),
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: path.join(__dirname, '..', 'node_modules')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&context=client&name=[path][name].[ext]'
            }, {
                test: /\.less?$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }]
    },
    plugins: [
        new HappyPack({
            // 通常情况下，不需要指定此项，除非定义了多个HappyPack插件，在这种情况下，需要使用不同的ID来区分
            id: 'js',
            // 包含将转换文件的加载程序的名称（或绝对路径）以及要传递给它的可选查询字符串。(Array)
            loaders: ['babel-loader'],
            // 用于检索工作线程的预定义线程池
            threadPool: happyThreadPool,
            // 启用此选项可将状态消息从HappyPack记录到STDOUT
            verbose: true
        }),
    ]
};

module.exports = config;
