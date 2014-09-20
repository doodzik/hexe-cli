var when = require('when');
var generator = require('../../lib/generator');
var fs = require('fs');

module.exports = function addCmd(argv, hexeObj){
  //TODO [-as new_contract_name] [-v/--version 0.0.0 ]
  return when([
    argv._[0],
    (argv._[1] || hexeObj.service),
    hexeObj.lang
  ])
  .spread(function(contract, adapter, lang){
    var gSet = generator.set(lang+'-'+contract);
    hexeObj.contracts = hexeObj.contracts || {}
    generator.exists(gSet(''))
    if(!(contract in hexeObj.contracts)){
      hexeObj.contracts[contract] = {};
      generator.run(gSet('contract'))
      generator.run(gSet('adapter') + ' ' + adapter)
    }else{
      var file = process.cwd()+'/adapters/'+contract+'/'+adapter
      fs.exists(file, function(exists) {
        if (exists) {
          throw new Error('adapter already defiend')
        }else{
          generator.run(gSet('adapter') + ' ' + adapter)
        }
      })
    }
  })
  .then(function(){
    return hexeObj;
  })
}
