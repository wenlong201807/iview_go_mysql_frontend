"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require("path");

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    // proxyTable: {},

    // proxyTable: {
    //   "/api": {
    //     target: "http://192.168.43.148:80/", //跨域地址**后端的实际地址
    //     changeOrigin: true, //是否跨域
    //     secure: false, //是否使用https
    //     pathRewrith: {
    //       "^/api": ""
    //       //这里要理解成用'/api'
    //       //'http://40.00.100:3002/user/add'，
    //       //直接写成'/api/user/add'即可
    //     }
    //   },
    //   "/json": {
    //     target: "http://localhost:6636/", //跨域地址**后端的实际地址
    //     changeOrigin: true, //是否跨域
    //     secure: false, //是否使用https
    //     pathRewrith: {
    //       "^/json": ""
    //       //这里要理解成用'/api'
    //       //'http://40.00.100:3002/user/add'，
    //       //直接写成'/api/user/add'即可
    //     }
    //   }
    // },
    proxyTable: {
      "/api": {
        // 测试环境
        target: "http://192.168.31.30:80", // 接口域名
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/api": "" //需要rewrite重写的,
        }
      },
      "/home": {
        // 测试环境
        target: "http://192.168.43.148:8080", // 接口域名***家里
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/home": "" //需要rewrite重写的,
        }
      },
      "/company": {
        // 测试环境
        target: "http://192.168.43.148:80", // 接口域名***家里
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/company": "" //需要rewrite重写的,
        }
      },
    },

    // Various Dev Server settings
    host: "localhost", // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: "cheap-module-eval-source-map",

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, "../dist/index.html"),

    // Paths
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/",

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: "#source-map",

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
