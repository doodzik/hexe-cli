var fs = require('fs');
var sys = require('sys')

var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

module.exports = function generateCmd (argv, hexeObj, cb){

//hexe g/generate language
// g/generate language contact_name


var lang = argv._[0];
var contract = argv._[1] || false;
var lang = hexeObj.lang;

var generator = (!contract)? 'hexe:language '+lang : 'hexe:contract '+contract;
var generatorName = 'generator_hexe';

try {
  console.log(require.resolve(generatorName));
} catch(e) {
  console.error('npm install -g '+ generatorName);
  process.exit(e.code);
}

exec('yo '+generator, puts)

return hexeObj;
}
