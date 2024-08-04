var fs = require("fs");
console.log("writing into existing file");
fs.writeFile('input1.txt', 'helloooo', function(err) {
if (err) {
return console.error(err);
}
console.log("Data written successfully!");
});
var data = "\nThis is the new data to append."; 
// Append data to file
fs.appendFile('input1.txt', data, 'utf8',
//callback function
 function(err) {
 if (err) throw err;
 console.log("Data is appended to file successfully.")
});
//read file asynchronously
fs.readFile('input1.txt', function (err, data) {
 if (err) {
 return console.error(err);
 }
 console.log("Asynchronous read: " + data.toString());
});
// Get the file descriptor of the given path
file_descriptor = fs.openSync("input1.txt");
console.log("The file descriptor is:", file_descriptor);
// Close the file descriptor
fs.close(file_descriptor, (err) => {
 if (err)
 console.error('Failed to close file', err);
 else {
 console.log("\n> File Closed successfully");
 }
});