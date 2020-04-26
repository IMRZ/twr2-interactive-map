module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL,
  lintOnSave: false,
  pwa: {
    name: 'Total War: Rome II - Interactive Map',
    short_name: 'twr2im',
    themeColor: '#000000',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    }
  }
};
