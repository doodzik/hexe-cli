var fs = require('fs');
var sys = require('sys')

var nodefn = require('when/node');
var exec = require('child_process').exec;
var R = require('ramda');
function puts(error, stdout, stderr) { sys.puts(stdout) }

var generator = {
  exists:function(generatorName){
    return nodefn.call(exec, 'npm root -g | xargs ls | grep generator-'+generatorName).catch(function(s){
      throw new Error('install this generator: npm install -g generator-'+ generatorName)
    })
  },
  run: function(generator){
    return exec('yo '+generator, puts)
  },
  set: R.curry(function(generator, cmd){
    var prefix = (generator.length > 0)? 'hexe-' : 'hexe';
    if(cmd.length > 0){
      cmd = ':'+cmd;
    }
    return prefix+generator+cmd
  })
};

module.exports = generator;
