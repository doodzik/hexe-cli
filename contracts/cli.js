
var fs = require("fs")
var adapterCliDir = __dirname + '/../adapters/cli'
var nodefn = require('when/node');

var getAdapters = nodefn.call(fs.readdir, adapterCliDir);

var hasCmd = function(files, argv){
    var cmd = argv._[0]
    if(!cmd){
      throw new Error('no such task: '+ cmd)
    }
    var _len = files.length - 1;
    for (var _i = 0; _i <= _len; _i++) {
      var file = files[_i];
      var task = file.substring(0, file.indexOf('.'));
      var first_task_letter = task.charAt(0)
      if(cmd == task || cmd == first_task_letter){
        return [file, argv];
        break
      }else if(_len == _i){
        throw new Error('no such task: '+ cmd)
      }
    }
}

var runCmd = function(file, argv, obj){
  argv._.shift()
  return require(adapterCliDir +'/'+ file)(argv, obj)
}

module.exports = function(argv, obj){
  return getAdapters
  .then(function(files){
    return [
      files,
      argv
    ]
  })
  .spread(hasCmd)
  .spread(function(file, argv){
    return [
      file,
      argv,
      obj
    ]
  })
  .spread(runCmd);
}
