let os = require('os')
console.log(os.platform()) //to find operating system==>its an inbuild function
    //to run==>open new terminal or cmd prompt
    //cd +copy paste path of sub folder ==>type the req file name
    //node+file name
console.log(os.arch()) //for architecture
console.log(os.cpus())
console.log(os.processor())
console.log(os.hostname())

//o/p
// win32
// x64
// [
//   {
//     model: 'AMD PRO A4-4350B R4, 5 COMPUTE CORES 2C+3G     ',
//     speed: 2495,
//     times: {
//       user: 57771000,
//       nice: 0,
//       sys: 42740609,
//       idle: 222844265,
//       irq: 5647875
//     }
//   },
//   {
//     model: 'AMD PRO A4-4350B R4, 5 COMPUTE CORES 2C+3G     ',
//     speed: 2495,
//     times: {
//       user: 57460281,
//       nice: 0,
//       sys: 32107406,
//       idle: 233787984,
//       irq: 1759875
//     }
//   }
// ]
// Method	Description
// arch()	Returns the operating system CPU architecture
// constants	Returns an object containing the operating system's constants for process signals, error cotes etc.
// cpus()	Returns an array containing information about the computer's CPUs
// endianness()	Returns the endianness of the CPU
// EOL	Returns the end-of-line marker for the current operating system
// freemem()	Returns the number of free memory of the system
// hostname()	Returns the hostname of the operating system
// loadavg()	Returns an array containing the load averages, (1, 5, and 15 minutes)
// networkInterfaces()	Returns the network interfaces that has a network address
// platform()	Returns information about the operating system's platform
// release()	Returns information about the operating system's release
// tmpdir()	Returns the operating system's default directory for temporary files
// totalmem()	Returns the number of total memory of the system
// type()	Returns the name of the operating system
// uptime()	Returns the uptime of the operating system, in seconds
// userInfo()	Returns information about the current user