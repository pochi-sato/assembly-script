const { add } = require('./wasm-modules');

console.log(add(6, 2));

// module.exports = loader.instantiateSync(
//   fs.readFileSync(`${__dirname}/build/optimized.wasm`),
//   {
//     /* imports */
//   }
// );

// src/node.js
// const fs = require("fs")
// const wasm = "./public/bin.wasm"
// const buffer = fs.readFileSync(wasm)

// const w = WebAssembly.compile(buffer)
//   .then( module => {
//     const instance = WebAssembly.Instance(module, {})
//     console.log(instance.exports.echo(3))
//   })
