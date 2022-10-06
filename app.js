const { createMultiplyByFile } = require("./helpers/multiply");
const argv = require("./config/yargs");

console.clear();

const { base, list, ceiling } = argv;

createMultiplyByFile(base, list, ceiling)
  .then((fileName) => console.log(`${fileName} created!`))
  .catch((error) => console.error("Error: ", error));
