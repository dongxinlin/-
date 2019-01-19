const fs = require("fs");
const path = require("path");

function ReadFile(name) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname,name),'utf8', (err, data) => {
      if (err) return reject();
      resolve(data);
    });
  });
}

ReadFile("./data/1.txt")
  .then(res => {
    console.log(res);
    return ReadFile("./data/2.txt");
  })
  .then(res => {
    console.log(res);
    return ReadFile("./data/arr.txt");
  })
  .then(res=>{
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });