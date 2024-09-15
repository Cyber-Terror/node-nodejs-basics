import * as fs from 'node:fs'
const copy = async () => {
    // Write your code here 
    if(fs.existsSync('./files1') && !fs.existsSync('./files_copy')){
        fs.cp('./files','./files_copy',{recursive: true},(err)=>{
            if(err) throw new Error(err);
        })
    }
    else throw new Error('FS operation');
    
};

await copy();
