const { defineConfig } = require('@vue/cli-service')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    proxy: '这里填写域名',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // configureWebpack: {
  //   plugins: [new BundleAnalyzerPlugin({ analyzerPort: 8082 })]
  // }
})
