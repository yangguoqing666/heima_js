/**
 * Created by zhaobin on 2016/11/12.
 */
var webpack = require('webpack');
var path = require('path');
var os = require('os');
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

var config = {
    resolve: {
        alias: {
            '~': path.join(__dirname, '../src'),
        },
        extensions: ['.tsx','.ts','.js', '.jsx']
    },
    devtool: "inline-source-map",
    entry: {
        admin: [
            '@babel/polyfill',
            './src/admin/app.jsx',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
        ],
    },
    mode: 'development',
    output: {
        filename: './[name].bundle.js',
        path: path.join(__dirname, '../build'),
        publicPath: '/',
        chunkFilename: '[name].admin.chunk.js'
    },

    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                loader: ['happypack/loader?id=js'],
                include: path.join(__dirname, '..', 'src'),
                exclude: path.join(__dirname, '..', 'node_modules')
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: path.join(__dirname, '..', 'node_modules')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=40000&context=client&name=[path][name].[ext]'
            }, {
                test: /\.css$/,
                //include: path.resolve(__dirname, 'src'),
                // exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"dev"',
            __CLIENT__: true,
            __SERVER__: false,
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};

module.exports = config;
