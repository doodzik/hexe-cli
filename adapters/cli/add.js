var fs = require('fs');
var sys = require('sys')

var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

module.exports = function addCmd(argv, hexeObj, cb){
//TODO [-as new_contract_name] [-v/--version 0.0.0 ]
var contract = argv._[0];
var adapter = argv._[1] || hexeObj.service;
var lang = hexeObj.lang;
var generator = 'hexe_'+lang+'_'+contract;
var generatorName = 'generator_'+ generator;

try {
  console.log(require.resolve(generatorName));
} catch(e) {
  console.error('npm install -g '+ generatorName);
  process.exit(e.code);
}

if(!(contract in hexeObj.contracts)){
  exec('yo '+generator+':contract', puts);
  hexeObj.contracts[contract] = {};
}

if(!fs.existsSync(process.cwd()+'/adapters/'+contract+'/'+adapter)){
  exec('yo '+generator+':adapter '+adapter, puts)
}else{
  throw new Error('adapter already defiend')
}

return hexeObj;
}
