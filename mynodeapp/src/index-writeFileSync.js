const fs = require('fs')
const path = require('path')

const options = {
    encoding: 'UTF-8'
}

function blockMe(message) {
    console.log(message)
}
//blocking way of writing data
// const newFilePath = './src/assets/hello.txt';
const filePath = path.join(__dirname,'assets/info.txt')

blockMe('start')
fs.writeFileSync(filePath, data, options)
blockMe('end')