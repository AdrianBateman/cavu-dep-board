# cavu-dep-board

## Setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run unit tests with coverage
```
npm run test:coverage
```

### Lints and fixes files
```
npm run lint
```

## TODO

* Add store to keep response from fetchFlightData
* Use store to display flight data
* Limit displayed items to 10/20/next hour/all
* Add option to sort using sortFlightData function
* Add form style

## NOTE
Flag in file `src\functions\fetch-flight-data\fetch-flight-data.js` line 4 for testing error message

## Extra Packages

### Dependencies

[core-js](https://www.npmjs.com/package/core-js) - polyfill JS library library

### Dev Dependencies

#### Unit testing

[babel-jest](https://www.npmjs.com/package/babel-jest)

[@vue/cli-plugin-unit-jest](https://www.npmjs.com/package/@vue/cli-plugin-unit-jest)

[@vue/test-utils](https://www.npmjs.com/package/@vue/test-utils)

[@vue/vue2-jest](https://www.npmjs.com/package/@vue/vue2-jest)

[jest](https://www.npmjs.com/package/jest)

#### Compiling source code
[@babel/core](https://www.npmjs.com/package/@babel/core)

[@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser)

[@vue/cli-plugin-babel](https://www.npmjs.com/package/@vue/cli-plugin-babel)

[sass](https://www.npmjs.com/package/sass)

[sass-loader](https://www.npmjs.com/package/sass-loader)

[vue-template-compiler](https://www.npmjs.com/package/vue-template-compiler)

#### File linting code consistency
[@vue/cli-plugin-eslint](https://www.npmjs.com/package/@vue/cli-plugin-eslint)

[@vue/eslint-config-standard](https://www.npmjs.com/package/@vue/eslint-config-standard)

[eslint](https://www.npmjs.com/package/eslint)

[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)

[eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)

[eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)

[eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue)

#### Command line tools
[@vue/cli-service](https://www.npmjs.com/package/@vue/cli-service)
