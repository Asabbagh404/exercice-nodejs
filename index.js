const process = require('process');
const fs = require('fs');

// Get parameters of command line
console.log(process.argv);

// Get current path of the console
console.log(process.cwd())

// Get PID
console.log(process.pid);

// Get version
console.log(process.version)

// Get plateform
console.log(process.platform)

// Get title process (nodejs normally)
console.log(process.title)

// Launch at exit
process.on('exit', function () {
    fs.writeFileSync('myfile', 'This MUST be saved on exit.');
});

// Launch after an exception
process.on('uncaughtException', function (err) {
    console.error('An uncaught error occurred!');
    console.error(err.stack);
});

throw new Error('foo');


