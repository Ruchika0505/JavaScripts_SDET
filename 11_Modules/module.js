// module.js
export function greet() {
  return `Hello`;
}

export function studentName(name)
{
    return `Student name is ${name}`
}

//export variable

// module.js

// module.js
export const company = "OpenAI";
export let count = 10;

// 2 Export Variable Later (Separate Export)

// You can also declare first, then export:

// module.js
// const company = "OpenAI";
// let count = 10;

// export { company, count };

//import class

// module.js
export class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}`;
    }
}

//default export

// module.js
// export default function greet1(name) {
//     return `Hello, ${name}!`;
// };


// export default {
//   browser: "chrome",
//   headless: true
// };

// Import All (Namespace Import)

export const cmpy = "OpenAI";
export const version = "1.0";

export function greetAll(name) {
    return `Hello, ${name}`;
}


// | Type      | Syntax            | Usage             |
// | --------- | ----------------- | ----------------- |
// | Named     | `import { a }`    | Specific import   |
// | Default   | `import a`        | Main export       |
// | Namespace | `import * as obj` | Import everything |

// Dynamic Import
// static import { greet } from './module.js';   // Static import

// dynamic import('./module.js');   // Dynamic import

// | Static Import         | Dynamic Import       |
// | --------------------- | -------------------- |
// | Loads at start        | Loads when needed    |
// | Top of file only      | Can be used anywhere |
// | Synchronous structure | Returns a Promise    |

export function myfunction(name) {
  return `Hello, ${name}`;
}


// What is Circular Dependency?
// A circular dependency happens when:
// File A imports File B
// AND File B imports File A
// So they depend on each other


// Module caching means:

// When a module is loaded once, Node.js stores it in memory.
// If you import/require it again, Node returns the cached version instead of loading it again.

// So a module runs only once.

console.log("Module Loaded");

let count1 = 0;

export default {
  increment: () => ++count1
}; //varible count1 is in sharable mode can cause expected behaviour if not handled properly