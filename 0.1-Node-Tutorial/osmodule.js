const os = require('os')

// info about currentt user
const user = os.userInfo()

//method returns the sysytem uptime in seconds
const time = os.uptime()

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOs);