const parseEnv = () => {
    // Write your code here 
 let rss_Result= Object.entries(process.env).filter(([key,value])=>(
   key.match('RSS_')
  
      ));
  
    
    for (let i = 0; i < rss_Result.length; i++) {
       console.log(rss_Result[i][0]+'='+rss_Result[i][1]);
       
        
    }
};

parseEnv();