const fs = require("fs");
const addFiles = async (txt) => {
  const x = await fs.readFile("./starter.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  // Write file
  await fs.writeFile("./new.txt", "Nice to meet you", (err) => {
    if (err) throw err;
    console.log("Added new file");
  });
  await fs.writeFile("./new.txt", txt, (err) => {
    if (err) throw err;
    console.log("updated new file");
  });
};

addFiles("Hello I am updated");
