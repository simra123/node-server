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


const Data = async() => {
    // const res = await getOpDes('./content/op.txt');
    // console.log(res) 
    try {
        const res = await getOpDes('./content/op.txt');
        console.log(res) 
    } catch (error) {
        console.log(err)
    }
}
Data()