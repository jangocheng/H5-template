const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: process.env.VUE_APP_NAME, // 输出目录名称。在.env.production中配置
  productionSourceMap: false,
  devServer: {
    host: '178.78.38.178',
    // API请求代理配置
    proxy: {
      'api/': {
        target: process.env.VUE_APP_BASEURL,
        changeOrigin: true,
        pathRewrite: {
          'api/': ''
        }
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, process.env.VUE_APP_NAME),
          routes: ['/'],

          renderer: new Renderer({
            inject: {
              foo: 'bar'
            },
            headless: true,
            renderAfterDocumentEvent: 'render-event'
          })
        })
      )
      // 开启gzip压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 添加打包分析
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static'
        }
      ])
      // 小于10240Bytes图片转换为database64
      config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { limit: 10240 }))
    }
  }
}
