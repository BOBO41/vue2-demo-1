var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var SpritesmithPlugin = require('webpack-spritesmith')
var ImageminPlugin = require('imagemin-webpack-plugin').default

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'? config.build.assetsPublicPath: config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  //新增 雪碧的设置和压缩图片大小
  plugins: [
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production', 
      pngquant: {
        quality: '95'
      }
    }),
    new SpritesmithPlugin({
      // 目标小图标
      src: {
          cwd: path.resolve(__dirname,'../src/assets/sprite'),
          glob: '*.png'
      },
      // 输出雪碧图文件及样式文件
      target: {
          image: path.resolve(__dirname, '../src/assets/sprite.png'),
          css: [[path.resolve(__dirname, '../src/utils/sprite.less'),{format:'function_based_template'}]]
      },
      customTemplates: {
        'function_based_template': path.resolve(__dirname, '../src/utils/my_handlebars_template.handlebars')
      },
      // 样式文件中调用雪碧图地址写法
      apiOptions: {
          cssImageRef: '../assets/sprite.png'
      },
      spritesmithOptions: {
          algorithm: 'binary-tree',
          padding:10
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      //新增less的编译
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  }
}
