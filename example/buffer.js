/**
 * Created by Knunu on 2016. 7. 4..
 */

var buf = new Buffer(10);
var buf2;
var buf3 = new Buffer("Simple buffer", "utf-8");

var len = buf.write("Simply Easy Learning");
console.log("Octets written : " + len);

buf2 = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,10));
console.log(buf.toString(undefined,0,15));

var json = buf.toJSON(buf3);
console.log(json);