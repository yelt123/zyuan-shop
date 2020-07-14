module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/production-sub-path' : '/',
    outputDir: 'shop',
    assetsDir: 'static',
    indexPath: 'index.html',
    lintOnSave:false,
    runtimeCompiler: true,
    productionSourceMap:false,
    css:{
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/style.scss";`
            }
        }
    }
}