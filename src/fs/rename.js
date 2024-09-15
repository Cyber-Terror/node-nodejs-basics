import * as fs from 'node:fs'
const rename = async () => {
    // Write your code here 
    if(fs.existsSync('./files/wrongFilename.txt') && !fs.existsSync('./files/properFilename.md')){
        
        fs.rename('./files/wrongFilename.txt','./files/properFilename.md',(err)=>{
            if(err) throw new Error(err);
        })
    }
    else{
        throw new Error('FS operation failed');
    }
};

await rename();