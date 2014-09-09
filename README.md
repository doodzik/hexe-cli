# ABOUT

***

## INSTALATION

***

## USAGE

###init new service
```bash
$ hexe n/new language service_name
```

###add contract to Service
```bash
$ hexe a/add contract_name [-as new_contract_name] [-v/--version 0.0.0 ]
```

###remove contract from Service
```bash
$ hexe d/delete contract_name
```

###add adapter to Service
```bash
$ hexe a/add contract_name [adapter_name(default: service_name)]
```

###general options
* ```--trace```: provide full stack trace

***

## FOR HEXE DEVS

### .hexe file:
```javascript
  {'service': name,
  'lang': language,
  'contracts': {
     contract_name: {
 	  'version': '0.0.0',
 	  'as': contract_name
 	 }
    }
   }
```

### generate new language generator
```bash
$ hexe g/generate language
```

### generate new contract/adapter generator
```bash
$ hexe g/generate language contact_name
```


#### implement
* typescript
* -as/-v options
* delete contract

***

##LICENSE
MIT
