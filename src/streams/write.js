import * as fs from 'node:fs'
const write = async () => {
    // Write your code here 
    if(fs.existsSync('./files/fileToWrite.txt')){
        let writeStream= fs.createWriteStream('./files/fileToWrite.txt');
        writeStream.on('error',(err)=>{
            throw new Error(err);
        })
       process.stdin.on('data',(data)=>{
        if(data.toString().trim()=='exit'){
            writeStream.end();
            process.exit();
        }
        writeStream.write(data);
       
       })
    }
    else throw new Error('FS operation failed');
   
};

await write();