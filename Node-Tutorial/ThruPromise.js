const {readFile, read} = require('fs');
const { start } = require('repl');

const getOpDes = (path) => {
    return new Promise((resolve , reject) => {
        readFile(path , 'UTF8' , (err , res)=>{
            if(err){
             reject(err)
            }
            else{
            resolve(res)
        
            }
        })
    })
}

getOpDes('./content/op.txt')
    .then((result => console.log(result))
    ).catch((err)=> console.log(err)
)

