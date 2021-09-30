const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-pluggin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    pluggins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'style-loader', // Adiciona CSS dentro da DOM injetando a tag <style>
                'css-loader' // interpretar @import, url()...
            ]
        }]
    }
}