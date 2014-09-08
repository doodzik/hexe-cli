
var fs = require("fs")
var adapterCliDir = __dirname + '/../adapters/cli'

module.exports = function(argv, hexeObj, cb){ 
  fs.readdir(adapterCliDir, function(err, files){
    files.forEach(function(file) {
      var task = file.substring(0, file.indexOf('.'));
      var first_task_letter = task.charAt(0)
      if(argv._[0] == task || argv._[0] == first_task_letter){
        require(adapterCliDir +'/'+ file)(argv._.shift(), hexeObj, cb);
        break
      }
    });
  });
}
