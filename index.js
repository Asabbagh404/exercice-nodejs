const { exec } = require('child_process');

exec('ls -lh', (error, stdout, stderr) => {
    if (error) {
        console.error(`error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout:\n${stdout}`);
});

// Use child process to copy a file and create an other one, after launch a npm install
