//@vue/cli-service会读取vue.config.js文件（如果存在的话），https://cli.vuejs.org/config/#publicpath
module.exports = {
  publicPath: "/", //default, 默认是放在主域名后的根路径，但是也可以按照需要设在子路径下访问
  outputDir: "dist", //default
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html"
    }
  }
};
