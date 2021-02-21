module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Vue The Movie DB APP";
      return args;
    });
  }
};
