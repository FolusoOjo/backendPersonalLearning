const fs = require("fs");

//we can use the file system to

//read files.

// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log("error 404");
//   }
//   console.log(data.toString());
// });

//write files

// fs.writeFile("./docs/blog1.text", "Hello, Seyi", () => {
//   console.log("Hello, Funmi");
// });

//create new files.

// fs.writeFile("./docs/blog2.text", "Hello, blogpost", () => {
//   console.log("Hello, blog2");
// });

//Directories

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

//Deleting files

// if (fs.existsSync("./docs/delete.txt")) {
//   fs.unlink("./docs/delete.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file deleted");
//   });
// }

//STREAMS AND BUFFERS
