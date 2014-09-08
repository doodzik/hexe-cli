var assert = require("assert")
var expect = require('expect.js');
var sinon = require('sinon');

describe('Cli', function(){
  describe('hexe', function(){
     it('bin works', function(){
        
     }) 
  })
  
  describe('new', function(){
    it('calls new service', function(){
        //$ hexe n/new language service_name 
    })
  })

//###add contract to Service
//$ hexe a/add contract_name [-as new_contract_name] [-v/--version 0.0.0 ]

  describe('add', function(){
    //###add adapter to Service
    //$ hexe a/add contract_name [adapter_name(default: service_name)]
    it('calls add contract', function(){
    })
    it('calls add adapter', function(){
    })
  })


  describe('generate', function(){
    //### generate new language module
    //$ hexe g/generate language
    it('call generate new language', function(){
    
    })

    //### generate new contract/adapter module
    //$ hexe g/generate language contact_name
    it('calls generate new contractor', function(){
    })
  })

  })
})
