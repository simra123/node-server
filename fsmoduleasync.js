const {readFile , writeFile }  = require('fs');
console.log('start')
readFile('./file.txt', 'utf8' , (err , result)=> {
    if(err){
        console.log(err)
    }else{
      const reesult = result;
      writeFile('./dot-async.txt' , `stop braging that ${reesult}`,
      (err , res)=> {
        if(err){ 
            console.log(err)
        }else{
            console.log(res)
        }  
      })
    }
}) 
console.log('ended')