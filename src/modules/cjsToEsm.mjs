//const path = require('path');
//const { release, version } = require('os');
//const { createServer: createServerHttp } = require('http');
//require('./files/c');

import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
import {release, type, version} from 'os';
import { createServer} from 'http';
import  './files/c.js'
const {default: dataA}= await import('./files/a.json', {assert: {type: 'json'}});
const {default: dataB}= await import('./files/a.json', {assert: {type: 'json'}});


const random = Math.random();

 export let unknownObject;

if (random > 0.5) {
    unknownObject = dataA;
} else {
   unknownObject = dataB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

 export  const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

// module.exports = {
//     unknownObject,
//     myServer,
// };

