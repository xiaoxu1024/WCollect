const path = require('path')
const { defineConfig } = require('@vue/cli-service')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  publicPath: './', // 解决web页面打包后本地打开页面空白的问题
  transpileDependencies: true,
  devServer: {
    historyApiFallback: true,
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @use "@/styles/variable.scss" as *;
        `
      }
    }
  },
})
