const fs = require("fs");

const createMultiplyByFile = (base = 5, list, ceiling = 10) => {
  return new Promise((resolve, reject) => {
    let output = "";
    for (let i = 1; i <= ceiling; i++) {
      output += `${base} X ${i} = ${i * base}\n`;
    }
    try {
      const fileName = `output-${base}.txt`;
      fs.writeFileSync(`./output/${fileName}`, output);
      if (list) {
        console.log(output);
      }
      resolve(fileName);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createMultiplyByFile,
};
