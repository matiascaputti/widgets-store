module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3333
    },
}