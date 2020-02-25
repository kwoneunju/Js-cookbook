var str = "This is a list of items: cherries, Limes, oranges, apples.";
console.log('str. item list:', str.split(':')[1]);

var str2 = 'This is one sentence. This is a sentence with a list of items:' + 'cherries, oranges, apples, bananas. That was the list of items.',
    str2_start = str2.indexOf(':'),
    str2_end = str2.indexOf('.', str2_start + 1);
console.log('result: ', str2.substring(str2_start + 1, str2_end));


var str3 = 'To be, or not to be, that is the question.',
    count = 0,
    pos = str3.indexOf('e');
while(pos !== -1) {
    count++;
    pos = str3.indexOf('e', pos + 1);
}
console.log('e count: ', count);