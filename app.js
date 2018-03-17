const d20 = require('d20');
const fs = require('fs');

var d20Results = '';
var lineCount = 0;
var myText = '';
do
{
    d20Results += d20.roll(20) + ' ';
    if(d20Results.length >= 75) {
        myText += d20Results + '\r\n'
        d20Results = '';
    }

    lineCount = (myText.match(/\r\n/g) || []).length;
} while(lineCount < 50);

console.log(myText);

fs.appendFile('d20Results.txt', myText, function (err) {
    if (err) {
      console.log('This failed for some reason.')
    } else {
      console.log('Success!')
    }
  })