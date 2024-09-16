import { spawn,fork } from 'child_process'
const spawnChildProcess = async (args) => {
    // Write your code here
    const chproc = spawn(`node`, ['./files/script.js',...args]);
    chproc.stdout.on('data',(data)=>{
        process.stdout.write(data);
    })
    //почитал разобрал но не совсем понял хотел бы уточнить strange
    process.stdin.pipe(chproc.stdin);
    chproc.on('close', (code) => {
        if (code !== 0) {
            console.log(`chproc process exited with code ${code}`)
        }
    })
  

};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */ [5,6,7]);
