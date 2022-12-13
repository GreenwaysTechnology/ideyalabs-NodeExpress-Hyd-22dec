const fs = require('fs')

const blockMe = message => console.log(message)
//read file 
const filePath = './src/assets/info.txt'
const options = {
    encoding: 'UTF-8'
}
blockMe('start')
fs.readFile(filePath, options, (err, data) => {
    if (err) throw err
    console.log(data)
})
blockMe('end')

//fileService.read(path,options,callback)
//filesservice.read(path,options).then().catch
//const data = await fileservice.read(path,options)