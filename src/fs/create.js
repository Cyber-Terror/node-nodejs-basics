import * as fs from 'node:fs'
const create = async () => {
    // Write your code here
   if( fs.existsSync('./files/fresh.txt')){
    throw new Error('FS operation failed');
   }
   else{
    fs.open('./files/fresh.txt', 'w', (err) => {
        if (err) {
            throw new Error(err);

        }
        else{
            fs.writeFile('./files/fresh.txt','I am fresh and young',(err)=>{
                if(err) throw new Error (err);
            })
        }
    

    })
   }
   
};

await create();