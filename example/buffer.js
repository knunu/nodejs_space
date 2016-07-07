/**
 * Created by Knunu on 2016. 7. 4..
 */

var buf = new Buffer(26);
var buf2;
var buf3 = new Buffer("Simple buffer", "utf-8");

// write
var len = buf.write("Simply Easy Learning");
console.log("Octets written : " + len);

// toString
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,10));
console.log(buf.toString(undefined,0,15));

// json
var json = buf.toJSON(buf3);
console.log(json);

// concat
buf2 = new Buffer(' Tutorials');
var concatBuf = Buffer.concat([buf3, buf2]);
console.log("concatenated buffer content : " + concatBuf.toString());

// compare
buf = new Buffer('ABCC');
buf2 = new Buffer('ABCD');
var result = buf.compare(buf2);

if (result < 0) {
    console.log(buf + " comes before " + buf2);
} else if (result == 0) {
    console.log(buf + " is same as " + buf2);
} else {
    console.log(buf + " comes after " + buf2);
}

// length
console.log("buffer length : " + buf2.length);

