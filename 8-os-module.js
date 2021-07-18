const os = require('os');

//infor about current user
const user = os.userInfo()
console.log(user)


//method returns the system uptime
console.log(os.uptime())

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(), 
}
console.log(currentOs)