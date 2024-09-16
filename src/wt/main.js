import { isMainThread, Worker, parentPort, workerData } from 'node:worker_threads';
import os from 'os';

const performCalculations = async () => {
    if (isMainThread) {
        let resultArr = [];
        let workers = [];
        let promises = [];

        for (let i = 0; i < os.cpus().length; i++) {
            promises.push(new Promise((resolve, reject) => {
                workers[i] = new Worker('./worker.js', { workerData: { num: 10 + i } });

                workers[i].on('message', (result) => {
                    resultArr.push({ status: `resolve${i}`, data: result });
                    resolve();
                });

                workers[i].on('error', (msg) => {
                    resultArr.push({ status: `reject${i}`, data: null });
                    reject();
                });

                workers[i].on('exit', (code) => {
                    if (code !== 0) {
                        console.error(`Worker ended with code ${code}`);
                    }
                });
            }));
        }

        
        await Promise.all(promises)
            .then(() => {
                console.log(resultArr); 
            })
            .catch((err) => {
                console.error('Ошибка в одном из воркеров', err);
            });
    }
};


performCalculations();
