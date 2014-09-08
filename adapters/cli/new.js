var fs = require('fs');
var sys = require('sys')

var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

module.exports = function newCmd (argv, hexeObj, cb){
  var lang = argv._[0];
  var service = argv._[1];

  var generator = 'hexe_'+lang;
  var generatorName = 'generator_'+ generator;

  try {
    console.log(require.resolve(generatorName));
  } catch(e) {
    console.error('npm install -g '+ generatorName);
    process.exit(e.code);
  }

  exec('yo '+generator, puts);
  hexeObj.lang = lang
  hexeObj.service = service


  exec('yo '+generator+'_amqp:contract', puts);
  exec('yo '+generator+'_amqp:adapter '+service , puts);
  hexeObj.contracts['amqp'] = {};
  exec('yo '+generator+'_http:contract', puts);
  exec('yo '+generator+'_http:adapter '+ service, puts);
  hexeObj.contracts['http'] = {};

  return hexeObj;
}
