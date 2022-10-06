const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    demandOption: false,
  })
  .option("c", {
    alias: "ceiling",
    type: "number",
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "Base has to be a number";
    }
    return true;
  }).argv;

module.exports = argv;
