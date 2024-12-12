const crypto = require('crypto')
const stream = require('stream')
const os = require('os')
const fs = require('fs')

// 1
const encryptString = (input_str) => {
    crypto.scrypt(input_str, 'ABC', 10, (err, data)=> {
        if(!err){
            console.log(data.toString("hex"))
        }
    })
}

const generateUUID = () => {
    let res = crypto.randomUUID()
    console.log(res)
}


// 2
const readFileUsingStream = (filepath) => {
    console.time('Stream Reading Started')
    // creates a stream of the data to be consumed
    const readStream = fs.createReadStream(filepath, {encoding: 'utf-8'})
    //consume the stream
    readStream.on('data', (d) => {
        console.log(d)
    })

    console.timeEnd('Stream Reading Started')
}

const readFileUsingFs = (filepath) => {
    console.time('FS Reading Started')

    fs.readFile(filepath, 'utf-8', (err, data) => {
        if(err){
            console.log(err)
        }
    })
    console.timeEnd('FS Reading Started')
}

// 3 
const os = require('os');

// Function to print OS details
function printOSDetails() {
    console.log('OS Information:');
    console.log(`Platform: ${os.platform()}`);
    console.log(`CPU Architecture: ${os.arch()}`);
    console.log(`Total Memory: ${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`);
    console.log(`Free Memory: ${(os.freemem() / 1024 ** 3).toFixed(2)} GB`);
    console.log(`Uptime: ${(os.uptime() / 3600).toFixed(2)} hours`);
    console.log(`Host Name: ${os.hostname()}`);
    console.log(`Home Directory: ${os.homedir()}`);
    console.log(`Operating System Type: ${os.type()}`);
    console.log(`Operating System Release: ${os.release()}`);
    console.log(`CPU Details:`);
    os.cpus().forEach((cpu, index) => {
        console.log(`\tCore ${index + 1}: ${cpu.model} - ${cpu.speed} MHz`);
    });
    console.log(`Network Interfaces:`);
    console.log(os.networkInterfaces());
}

printOSDetails();
