var when = require('when');
var generator = require('../../lib/generator');

module.exports = function generateCmd (argv, hexeObj){
  return when([
    argv._[0],
    (argv._[1] || false)
  ])
  .spread(function(lang, contract){
    return (contract)?
      generator.set(lang, 'contract') +' '+ contract :
      generator.set('', 'lang') +' '+ lang;
  })
  .then(function(_generator){
    generator.exists(_generator)
    generator.run(_generator);
  })
  .then(function(){
    return hexeObj;
  })
}
