const fs = require('fs');

try {
    // Step 1: Create and write data to the file
    console.log("Writing into existing file");
    fs.writeFileSync('input3.txt', 'HELLO!');
    console.log("Data written successfully!");

    // Step 2: Append data to the file
    const dataToAppend = "\nThis is the new data to append.";
    fs.appendFileSync('input3.txt', dataToAppend, 'utf8');
    console.log("Data is appended to file successfully.");

    // Step 3: Read the file synchronously
    const data = fs.readFileSync('input3.txt', 'utf8');
    console.log("Synchronous read: " + data);

    // Step 4: Get the file descriptor
    const fileDescriptor = fs.openSync('input3.txt', 'r');
    console.log("The file descriptor is:", fileDescriptor);

    // Step 5: Close the file descriptor
    fs.closeSync(fileDescriptor);
    console.log("> File closed successfully.");
   } 
catch (err)
{
    console.error("Error:", err);
}
