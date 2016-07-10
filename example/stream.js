/**
 * Created by Knunu on 2016. 7. 7..
 */

var fs = require("fs");
var zlib = require("zlib");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

// Handle stream events -> data, end, error
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end', function() {
    console.log(data);
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');
data = 'Simple writer example\n';

writerStream.write(data, 'UTF8');
writerStream.end();

// Handle stream events -> finish, error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err) {
    console.log(err.stack);
});

// Pipe the read and write operations
// read input.txt and write data to output.txt (input.txt => output2.txt)
var writerStream2 = fs.createWriteStream('output2.txt');
readerStream.pipe(writerStream2);

// Compress the file input.txt to input.txt.gz (Chaining streams)
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
console.log("File compressed.");

// Decompress the file input.txt.gz to input.txt
// fs.createReadStream('input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('dec_input.txt'));
// console.log("File decompressed.");


console.log("Program ended");
