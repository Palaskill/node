const os = require('os')

// info about current user

const user = os.userInfo()

console.log(user)


//methode returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds `)