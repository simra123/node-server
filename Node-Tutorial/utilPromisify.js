const { writeFile, readFile} = require('fs').promises;
const util = require('util')
//instead of this we can use promise in require fs
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const data = async() => {
    try {
        const opFile = await readFile('./content/op.txt' , 'utf8')
        const createFile = await writeFile('./content/generate-cringe-file.html' , `<h1>${opFile}</h1>`
         , {flag : 'a'})
        console.log(createFile);
    } catch (error) {
        console.log(error)
    }
}
 data()