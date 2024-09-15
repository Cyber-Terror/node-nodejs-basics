import * as fs from 'node:fs'
const read = async () => {
    // Write your code here 
    if (fs.existsSync('./files/fileToRead.txt')) {
        fs.readFile('./files/fileToRead.txt',(err,data)=>{
            if(err) throw new Error(err);
            else console.log(String(data));
            
        })
    }
    else throw new Error('FS operation failed');
};

await read();