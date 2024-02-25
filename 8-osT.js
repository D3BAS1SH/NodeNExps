const OS=require('os');

//Info about current User
const USER= OS.userInfo();
console.log(USER);

//Method returns the system uptime in seconds.
console.log(`The system uptime is : ${OS.uptime()} seconds`);

const currestOS={
    name:OS.type(),
    release:OS.release(),
    totalMem:OS.totalmem(),
    freeMem:OS.freemem(),
}

console.log(currestOS);