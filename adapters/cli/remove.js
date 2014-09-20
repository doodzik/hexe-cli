var when = require('when');
var fs = require('fs');

module.exports = function removeCmd(argv, hexeObj){
  return when(argv._[0])
  .then(function(contract){
    if(contract){
      //remove contract from contracts
      fs.unlink('/contracts/'+contract+'.*')

      //remove contract from adapters
      fs.unlink('/adapters/'+contract+'/*')
      fs.rmdir('/adapters/'+contract)

      //remove contract from Tasks
      fs.unlink('/tasks/'+contract+'.*')

      //remove contract from hexeObj
      delete hexeObj.contracts[contract]
    }else{
      throw new Error('provide a contract')
    }
  })
  .then(function(){
    return hexeObj;
  })
}
