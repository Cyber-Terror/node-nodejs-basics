import * as fs from 'node:fs'
import { Transform, Stream } from 'node:stream';
const transform = async () => {
    // Write your code here
    const toReverse= new Transform({
        transform(chunk,encoding,callback){
            
            callback(null, chunk.toString().split("").reverse().join("")+'\n')
        }
    })
    process.stdin.on('data',(data)=>{
        if(data.toString().trim() =='end'){
            process.exit(0)
        }
        
    }).pipe(toReverse).pipe(process.stdout);

};

await transform();