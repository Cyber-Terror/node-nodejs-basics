import * as zlib from 'node:zlib';
import * as fs from 'node:fs'
const compress = async () => {
    // Write your code here 
    if (fs.existsSync('./files/fileToCompress.txt')) {
        let readStream = fs.createReadStream('./files/fileToCompress.txt');
        let gzip= zlib.createGzip();
        let writeStream= fs.createWriteStream('./files/archive.gz')
        readStream.pipe(gzip).pipe(writeStream);
    }
    else throw new Error('FS operation failed');
};

await compress();