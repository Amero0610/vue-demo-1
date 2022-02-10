/*
 * @Author: Amero
 * @Date: 2022-01-11 23:03:22
 * @LastEditors: Amero
 * @LastEditTime: 2022-02-11 02:17:23
 * @FilePath: \vue-demo-1\vue.config.js
 */

module.exports = {
    configureWebpack: { externals: 'hls.js' },
    publicPath: './',
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    chainWebpack: config => {
        config.module
            .rule('graphql')
            .test(/\.pdf$/)
            .use('file-loader').tap(options => {
                options = {
                    name: '[name].[ext]'
                }
                return options
            })
            .loader('file-loader')
            .end()
        config.module.rule('lrcloader')
            .test(/\.lrc$/)
            .use('file-loader')
            .tap(options => {
                options = {
                    name: '[name].[ext]'
                }
                return options
            })
            .loader('file-loader')
            .end()

    },
    
    css: {
        extract: false
      }
}