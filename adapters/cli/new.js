var when = require('when');
var generator = require('../../lib/generator');

module.exports = function newCmd (argv, hexeObj){
  return when({
    lang: argv._[0],
    service: argv._[1],
  })
  .then(function(obj){
    obj.generator = generator.set(obj.lang);
    return obj;
  }).then(function(obj){
    generator.exists(obj.generator(''))
    generator.run(obj.generator('')+' '+obj.service);
    return obj;
  })
  .then(function(obj){
    hexeObj.lang = obj.lang
    hexeObj.service = obj.service
    return hexeObj;
  })
}
