const parseArgs = () => {
    // Write your code here 
    let resultStr='';
    for (let i = 2; i < process.argv.length; i++) {
        
    if(process.argv[i].startsWith('--')){
        process.argv[i]=process.argv[i].slice(2,process.argv[i].length);
         resultStr+=process.argv[i]+' is '+process.argv[i+1]+', ';
        i++;
    }
        
    }
    console.log(resultStr);
    
};

parseArgs();