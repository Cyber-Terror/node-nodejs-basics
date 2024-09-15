 import { isMainThread, Worker, parentPort, workerData } from 'node:worker_threads'
// import * as path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);

// // n should be received from main thread
// const nthFibonacci = (n) => {
//    // n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2)
   
//     if(n < 2){
//         return n;
//     }
//     else{
//         return  nthFibonacci(n - 1) + nthFibonacci(n - 2);
//     }
    
// };

// const sendResult = () => {
//     // This function sends result of nthFibonacci computations to main thread
//     if (isMainThread) {
//         let worker = new Worker(__filename, { workerData: { num: 5} })
//         worker.on('message', (result) => {
//             console.log("SADASD"+ result);
//             })
//             worker.on("error", (msg) => {
//                 console.log(msg);
//              });
//     }

// };

// sendResult();

if (isMainThread) {
    module.exports = function parseJSAsync(script) {
      return new Promise((resolve, reject) => {
        const worker = new Worker(__filename, {
          workerData: script,
        });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
      });
    };
  } else {
    const { parse } = require('some-js-parsing-library');
    const script = workerData;
    parentPort.postMessage(parse(script));
  }