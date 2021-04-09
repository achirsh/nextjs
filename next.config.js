module.exports = {
    // webpack: (config, options) => {
    //     config.module.rules.push({
    //         test: /\.(png|jpg|jpeg|gif|svg)$/,
    //         use: [{
    //             loader: 'file-loader',
    //             options: {
    //                 // img 路径名称.hash.ext
    //                 // 比如 1.png 路径名称为 _next/static/1.29.png
    //                 name: '[name].[contenthash].[ext]',
    //                 // 硬盘路径
    //                 outputPath: 'static',
    //                 // 网站路径是
    //                 publicPath: '_next/static'
    //             }
    //         }]
    //     })
    //     return config
    // }

    webpack(config, options) {
        return config
    }
}