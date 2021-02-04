var exec = require('child_process').exec;
function GitInfoWebpack () {}

GitInfoWebpack.prototype.apply = function (compiler) {

  compiler.hooks.compilation.tap('compilation', (compilation) => {
    var commandOutput = ''
    var d = new Date()
    var command = 'git log --pretty=format:"%h - %an, %ar : %s"  -1'
    var timeStamp = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    compilation.hooks.optimizeTree.tapAsync('optimize-tree', (chunks, modules, callback) => {
      exec(command, function (err, stdout) {
        if (err) { callback(err) }
        commandOutput = stdout.replace(/[\s\r\n]+$/, '')
        callback()
      })
    })
    compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap('html-webpack-plugin-before-html-processing', (htmlPluginData, callback) => {
      htmlPluginData.html = htmlPluginData.html + `<script>
        console.log(\`${commandOutput}\`);
        console.log('build date: ' + \`${timeStamp}\`);
      </script>`
    })                                                  
  })
}

module.exports = GitInfoWebpack