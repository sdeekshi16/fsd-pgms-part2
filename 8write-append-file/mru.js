var fs = require("fs");

console.log("writing into existing file");
fs.writeFile('input2.txt', 'Mallareddy University', function(err) {
if (err) {
return console.error(err);
}
console.log("Data written successfully!");
});

var data = " AIML Department"; 
// Append data to file
fs.appendFile('input2.txt', data, 'utf8',

//callback function
 function(err) {
 if (err) throw err;
 console.log("Data is appended to file successfully.")
});