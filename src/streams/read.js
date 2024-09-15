import * as fs from 'node:fs'
const read = async () => {
    // Write your code here 
    if(fs.existsSync('./files/fileToRead.txt')){
        let readStream = fs.createReadStream('./files/fileToRead.txt');
        readStream.on("error",(err)=>{
            throw new Error(err.message);
        })
        readStream.on('data',(data)=>{
            process.stdout.write(data);
        })
    }
    else throw new Error('FS operation failed');
};

await read();