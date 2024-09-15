import * as fs from 'node:fs'

const list = async () => {
    // Write your code here 
    let fileList;
    if (fs.existsSync('./files')) {
        fileList = fs.readdir('./files', {withFileTypes:true},(err,files) => {
            if (err) { throw new Error(err); }
            else{files.forEach(file=>{
                let lastPosition=file.name.indexOf('.');
                console.log(
                file.name=file.name.substring(0,lastPosition) );
                                
                
                
            })}
        })
    }
    else throw new Error('FS operation failed');
    

};

await list();