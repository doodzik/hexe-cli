### a cli-programm made to make the interaction with hexe generators easier

***

# WHO THE FUCK IS HEXE

###### Her Wiccan Rede was [Hexagonal architecture](http://alistair.cockburn.us/Hexagonal+architecture)
###### She conjures hexagonal.
###### She learns new spells fast,
###### And new tongues even faster.
###### Her spells interact nicely with each other,
###### And she can modify them after she invoke them

***

# INSTALATION

```bash
$ npm install -g git+https://git@github.com/walpurgisnacht/hexe-cli.git
$ cd hexe
$ npm link
```

if you need to install some additional generators the programm will notify you

***

# USAGE

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

***

#### TODO implement
* typescript
* -as/-v options
* delete contract
* 100% test coverage
* dont be dependent on manually adding external dependencies when calling add

***

##LICENSE
MIT
