const os = require('osxxx')

//get os information
console.log(`Platform ${os.platform()}`)
console.log(`Arch ${os.arch()}`)
console.log(os.cpus())
console.log(os.freemem())
console.log(os.hostname())
console.log(os.totalmem())