import * as zlib from 'node:zlib';
import * as fs from 'node:fs'
const decompress = async () => {
    // Write your code here 
   
    if (fs.existsSync('./files/archive.gz')) {
        let readStream = fs.createReadStream('./files/archive.gz');
        let deGzip= zlib.createGunzip();
        let writeStream= fs.createWriteStream('./files/fileToCompress.txt')
        readStream.pipe(deGzip).pipe(writeStream);
    }
    else throw new Error('FS operation failed');
};

await decompress();