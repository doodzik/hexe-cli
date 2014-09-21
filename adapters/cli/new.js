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
    return when()
           .then(function(){
             generator.exists(obj.generator(''))
           })
           .then(function(){
             generator.run(obj.generator('')+' '+obj.service);
           })
           .then(function(){
             return obj;
           })
  })
  .delay(7000)//TODO remove delay => Bug is that promises are not executed one after one
  .then(function(obj){
    hexeObj.lang = obj.lang
    hexeObj.service = obj.service
    hexeObj.Service = obj.service.charAt(0).toUpperCase() + obj.service.slice(1).toLowerCase()
    return hexeObj;
  })
}
