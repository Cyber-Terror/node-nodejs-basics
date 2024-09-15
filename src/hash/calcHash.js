import {createHash} from 'crypto'
import * as fs from 'node:fs'
const calculateHash = async () => {
    // Write your code here 
    if(fs.existsSync('./files/fileToCalculateHashFor.txt')){
        let readStream= fs.createReadStream('./files/fileToCalculateHashFor.txt');
        readStream.on('error',(err)=>{
            throw new Error(err.message);
        })
        readStream.on('data',(data)=>{
            console.log(createHash('sha256').update(data).digest('hex'));
            
        })
    }
    else throw new Error('FS operation failed');
};

await calculateHash();