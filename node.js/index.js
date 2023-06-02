//dosya okuma şeyi
let fs = require("fs");

//senkron dosya okuma ve yazma
let string = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(string);
let writeText = `This is what we know about the avocado : ${string}.\nCreated on ${Date.now()}`;
// console.log(writeText);
fs.writeFileSync("./txt/Output.txt", writeText);
// console.log("written !");


//asenkron dosya okuma ve deney
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  
  console.log(data);

  fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data1) => {
    if (err) throw err;

    console.log(data1);

    fs.writeFile('./txt/final.txt', `${data}.\n ${data1}`, (err) => {
      if (err) throw err;
      console.log('File written successfully.');
    });
  });
});

console.log("hi");

