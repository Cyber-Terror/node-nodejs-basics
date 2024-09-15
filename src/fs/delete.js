import * as fs from 'node:fs'
const remove = async () => {
    // Write your code here 
    if(fs.existsSync('./files/fileToRemove.txt')){
        fs.unlink('./files/fileToRemove.txt',(err)=>{
            if(err) throw new Error(err);
        })
    }
    else throw new Error('FS operation failed');
};

await remove();