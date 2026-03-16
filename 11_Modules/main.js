import {greet,studentName} from './module.js';


console.log(greet());
console.log(studentName('Ajay'));

//VAriables

import {company, count} from './module.js';

console.log(company);  // OpenAI
console.log(count);    // 10

//class

import {Person} from './module.js';

const p1 = new Person("David");
console.log(p1.greet());

//default

// import greet1 from './module.js';

// console.log(greet1("John"));

// import x from './module.js';

// console.log(g("John"));


import config from './module.js';

console.log(config.browser);   // chrome
console.log(config.headless);  // true

// Import All (Namespace Import)
// It imports all named exports from a module into a single object

import * as objectName from './module.js';
// * means “everything”
// as gives it a name (namespace)

console.log(objectName.cmpy)
console.log(objectName.version)
console.log(objectName.greetAll("Hi All"))
// console.log(objectName.browser) //It does NOT automatically grab default 
                                   //export the same way

console.log(objectName.default)

//Dynamic import

import('./module.js')
  .then(module => {
    console.log(module.myfunction("David"));
  }); //return the promise


import mod1 from './module.js';
import mod2 from './module.js';

console.log(mod1.increment()); //1
console.log(mod2.increment()); //2