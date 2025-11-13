// const file = require("fs");

//++++++++syn

// file.writeFileSync("./test.txt", "hello world file system");

const file = require("fs");

//++++++++Asyn

// file.writeFile("./text.txt", "hello this is async file", (err) => {});

// syn means give back data you store it in variable and also changing in it

const read = file.readFileSync("./contact.txt", "utf-8");
console.log(read);

//asyn dont given data back it use callback function

file.readFile("./contact.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("error occured", error);
  } else {
    console.log(data);
  }
});

//++++++++append file means data include ownword to...

file.appendFileSync("./text.txt", "appending data \n", (err) => {});

//++++++++copy file sync

file.copyFileSync("./text.txt", "./textcopy.txt");

//++++++++delete file sync

// file.unlinkSync("./text,txt");

//++++++++mkdir   means making a new folder

// file.mkdirSync("newfolder");

const os = require("os");

console.log(os.cpus().length);
