// var fs = require('fs');
//
// fs.writeFile("/pics", "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }
//
//     console.log("The file was saved!");
// });
//
// module.exports = fs;

// fs.write(fd, buffer, offset, length, position, callback)
//
// You need to wait for the callback to ensure that the buffer is written to disk. It's not buffered.


// fs.writeFile(filename, data, [encoding], callback)
//
// All data must be stored at the same time; you cannot perform sequential writes.
