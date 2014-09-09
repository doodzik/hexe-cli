var when = require('when');
var generator = require('../../lib/generator');
var fs = require('fs');

module.exports = function addCmd(argv, hexeObj){
//TODO [-as new_contract_name] [-v/--version 0.0.0 ]
  return when([
    argv._[0],
    (argv._[1] || hexeObj.service)
  ])
  .then(function(contract, adapter){
    var gSet = generator.set(lang+'_'+contract);

    if(!(contract in hexeObj.contracts)){
      hexeObj.contracts[contract] = {};
      return gSet('contract')
    }else{
      var file = process.cwd()+'/adapters/'+contract+'/'+adapter
      fs.exists(file, function(exists) {
        if (exists) {
          throw new Error('adapter already defiend')
        }else{
          return gSet('adapter')
        }
      })
    }
  })
  .then(function(_generator){
    generator.exists(_generator)
    generator.run(_generator);
  })
  .then(function(){
    return hexeObj;
  })
}
