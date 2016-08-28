SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "angular2-quickstart-jspm/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@5.0.19",
      "os": "github:jspm/nodelibs-os@0.2.0-alpha",
      "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
      "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
      "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
      "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
      "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha",
      "events": "github:jspm/nodelibs-events@0.2.0-alpha",
      "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
      "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "util": "github:jspm/nodelibs-util@0.2.0-alpha"
    },
    "packages": {
      "github:frankwallis/plugin-typescript@5.0.19": {
        "map": {
          "typescript": "npm:typescript@2.0.0"
        }
      },
      "github:jspm/nodelibs-os@0.2.0-alpha": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "github:jspm/nodelibs-crypto@0.2.0-alpha": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.11.0"
        }
      },
      "npm:crypto-browserify@3.11.0": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "create-ecdh": "npm:create-ecdh@4.0.0",
          "create-hmac": "npm:create-hmac@1.1.4",
          "randombytes": "npm:randombytes@2.0.3",
          "public-encrypt": "npm:public-encrypt@4.0.0",
          "create-hash": "npm:create-hash@1.1.2",
          "diffie-hellman": "npm:diffie-hellman@5.0.2",
          "pbkdf2": "npm:pbkdf2@3.0.4",
          "browserify-cipher": "npm:browserify-cipher@1.0.0",
          "browserify-sign": "npm:browserify-sign@4.0.0"
        }
      },
      "npm:public-encrypt@4.0.0": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "create-hash": "npm:create-hash@1.1.2",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:create-hmac@1.1.4": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:create-hash@1.1.2": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "ripemd160": "npm:ripemd160@1.0.1",
          "cipher-base": "npm:cipher-base@1.0.2",
          "sha.js": "npm:sha.js@2.4.5"
        }
      },
      "npm:pbkdf2@3.0.4": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "miller-rabin": "npm:miller-rabin@4.0.0",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:browserify-sign@4.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "create-hash": "npm:create-hash@1.1.2",
          "create-hmac": "npm:create-hmac@1.1.4",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "elliptic": "npm:elliptic@6.3.1",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "browserify-des": "npm:browserify-des@1.0.0",
          "browserify-aes": "npm:browserify-aes@1.0.6"
        }
      },
      "npm:create-ecdh@4.0.0": {
        "map": {
          "elliptic": "npm:elliptic@6.3.1",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:cipher-base@1.0.2": {
        "map": {
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:parse-asn1@5.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "pbkdf2": "npm:pbkdf2@3.0.4",
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "asn1.js": "npm:asn1.js@4.8.0"
        }
      },
      "npm:evp_bytestokey@1.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "cipher-base": "npm:cipher-base@1.0.2",
          "des.js": "npm:des.js@1.0.0"
        }
      },
      "npm:browserify-aes@1.0.6": {
        "map": {
          "cipher-base": "npm:cipher-base@1.0.2",
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.1",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "buffer-xor": "npm:buffer-xor@1.0.3"
        }
      },
      "npm:sha.js@2.4.5": {
        "map": {
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:elliptic@6.3.1": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.0.5",
          "hash.js": "npm:hash.js@1.0.3"
        }
      },
      "npm:miller-rabin@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.0.5"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:asn1.js@4.8.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "inherits": "npm:inherits@2.0.1",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:hash.js@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "github:jspm/nodelibs-buffer@0.2.0-alpha": {
        "map": {
          "buffer-browserify": "npm:buffer@4.9.1"
        }
      },
      "npm:buffer@4.9.1": {
        "map": {
          "isarray": "npm:isarray@1.0.0",
          "ieee754": "npm:ieee754@1.1.6",
          "base64-js": "npm:base64-js@1.1.2"
        }
      },
      "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
        "map": {
          "string_decoder-browserify": "npm:string_decoder@0.10.31"
        }
      },
      "github:jspm/nodelibs-stream@0.2.0-alpha": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "readable-stream": "npm:readable-stream@2.1.5"
        }
      },
      "npm:readable-stream@2.1.5": {
        "map": {
          "inherits": "npm:inherits@2.0.1",
          "isarray": "npm:isarray@1.0.0",
          "string_decoder": "npm:string_decoder@0.10.31",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "core-util-is": "npm:core-util-is@1.0.2",
          "buffer-shims": "npm:buffer-shims@1.0.0",
          "util-deprecate": "npm:util-deprecate@1.0.2"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  packages: {
    "angular2-quickstart-jspm": {
      "main": "angular2-quickstart-jspm.js",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "@angular/common": "npm:@angular/common@2.0.0-rc.5",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.5",
    "@angular/core": "npm:@angular/core@2.0.0-rc.5",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.5",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.5",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "rxjs": "npm:rxjs@5.0.0-beta.6",
    "zone.js": "npm:zone.js@0.6.17"
  },
  packages: {}
});
